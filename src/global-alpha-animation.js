const REDRAW_SPEED = 40;
const MAX_RADIUS = 10;

const canvas = document.querySelector("#board canvas");
const canvasContext = canvas.getContext("2d");
const { width: w, height: h } = canvas;

canvasContext.fillStyle = "#000";
canvasContext.globalAlpha = 0.01;

function update(time = 0) {
  requestAnimationFrame(update);

  const deltaTime = time - this.lastTimeUpdated;

  // draw results
  if (deltaTime > REDRAW_SPEED) {
    this.lastTimeUpdated = time;
    draw();
  }

  
}

function draw() {
  canvasContext.save();
  canvasContext.fillRect(0, 0, w, h);
  canvasContext.fillStyle = "#fff";
  canvasContext.globalAlpha = 1;

  // Random circle
  const x = Math.random() * w;
  const y = Math.random() * h;
  const radius = Math.random() * MAX_RADIUS;

  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, Math.PI * 2);
  canvasContext.fill();

  canvasContext.restore();

  this.deltaTime = 0;
}

this.lastTimeUpdated = 0;
update();