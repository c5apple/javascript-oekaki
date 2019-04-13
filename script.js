(function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var mousex, mousey;
  var state = false;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

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
      ctx.beginPath();
      ctx.moveTo(mousex, mousey);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      mousex = e.clientX;
      mousey = e.clientY;
    }
  });
})()