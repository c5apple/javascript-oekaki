(function () {
  var button = document.getElementById('clearBtn');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var mousex, mousey;
  var state = false;
  var color = 0;
  var lineWidth = 1;
  var timer;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.lineCap = 'round';

  var drawStartHandler = function (e) {
    mousex = getClientX(e);
    mousey = getClientY(e);
    state = true;
    lineWidth = 1;

    timer = setInterval(function () {
      lineWidth++

      if (lineWidth > 20) {
        clearInterval(timer);
        timer = undefined;
      }
    }, 100);

    e.preventDefault();
  };
  var drawEndHandler = function (e) {
    state = false;
    lineWidth = 1;
    if (timer !== undefined) {
      clearInterval(timer);
    }
    e.preventDefault();
  };
  var drawHandler = function (e) {
    if (state) {

      color++;
      ctx.strokeStyle = 'hsl(' + color + ', 100%, 50%)';
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(mousex, mousey);
      ctx.lineTo(getClientX(e), getClientY(e));
      ctx.stroke();

      mousex = getClientX(e);
      mousey = getClientY(e);
    }
    e.preventDefault();
  };

  if ('ontouchstart' in window) {
    canvas.addEventListener('touchstart', drawStartHandler);
    canvas.addEventListener('touchend', drawEndHandler);
    canvas.addEventListener('touchmove', drawHandler);
  }
  canvas.addEventListener('mousedown', drawStartHandler);
  canvas.addEventListener('mouseup', drawEndHandler);
  canvas.addEventListener('mousemove', drawHandler);

  button.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  var getClientX = function (event) {
    if (event.touches && event.touches[0]) {
      return event.touches[0].clientX;
    } else if (event.originalEvent && event.originalEvent.changedTouches[0]) {
      return event.originalEvent.changedTouches[0].clientX;
    } else if (event.clientX && event.clientY) {
      return event.clientX;
    }
  };

  var getClientY = function (event) {
    if (event.touches && event.touches[0]) {
      return event.touches[0].clientY;
    } else if (event.originalEvent && event.originalEvent.changedTouches[0]) {
      return event.originalEvent.changedTouches[0].clientY;
    } else if (event.clientX && event.clientY) {
      return event.clientY;
    }
  };
})()