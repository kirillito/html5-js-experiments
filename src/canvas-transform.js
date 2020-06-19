const REDRAW_SPEED= 50;

const canvas = document.querySelector("#board canvas");
const canvasContext = canvas.getContext("2d");
const { width: w, height: h } = canvas;

function update(time = 0) {
  const deltaTime = time - this.lastTimeUpdated;

  // draw results
  if (deltaTime > REDRAW_SPEED) {
    this.lastTimeUpdated = time;
    draw();
  }

  requestId = requestAnimationFrame(update);
}

function draw() {
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0, canvas.width, canvas.height);

  canvasContext.save();
  canvasContext.translate(w / 2, h / 2);

  for (let ring = 1; ring < 32; ring++) {
    canvasContext.fillStyle = `hsl(${ring * 25 + this.shift }, 90%, 50%)`;
  
    for (let dots = 0; dots < ring * 6; dots++) {
      canvasContext.rotate(Math.PI * 2 / (ring * 6));
      canvasContext.beginPath();
      canvasContext.arc(0, ring * 16, 7, 0, Math.PI * 2, true);
      canvasContext.fill();
    }
  }
  canvasContext.restore();

  this.shift++;
  this.deltaTime = 0;
}

this.lastTimeUpdated = 0;
this.shift = 0;
update();