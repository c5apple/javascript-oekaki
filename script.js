(function () {
  var button = document.getElementById('clearBtn');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var mousex, mousey;
  var state = false;
  var color = 0;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.lineCap = 'round';

  canvas.addEventListener('mousedown', function (e) {
    mousex = e.clientX;
    mousey = e.clientY;
    state = true;
  });

  canvas.addEventListener('mouseup', function (e) {
    state = false;
  });

  canvas.addEventListener('mousemove', function (e) {
    if (state) {

      color++;
      ctx.strokeStyle = 'hsl(' + color + ', 100%, 50%)';
      ctx.lineWidth = Math.random() * 31;
      ctx.beginPath();
      ctx.moveTo(mousex, mousey);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      mousex = e.clientX;
      mousey = e.clientY;
    }
  });

  button.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
})()