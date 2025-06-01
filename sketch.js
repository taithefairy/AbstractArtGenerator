let input = "";
let colors = [
  "#fce1e4", // A,1
  "#f8c3cd", // B,2
  "#e8b7d4", // C,3
  "#d0bdf4", // D,4
  "#e2f0cb", // E,5
  "#ffe0ac", // F,6
  "#ffc8dd", // G,7
  "#ffafcc", // H,8
  "#f9a8d4", // I,9
  "#f2b5e3", // J
  "#ffb3ba", // K
  "#ffd6e8", // L
  "#fab1a0", // M
  "#f7c59f", // N
  "#d3a1f9", // O
  "#c3a4f9", // P
  "#b89ff9", // Q
  "#ff9ca0", // R
  "#f4a8a8", // S
  "#d2a5e1", // T
  "#ffa8b6", // U
  "#f7b2d2", // V
  "#f0b2f9", // W
  "#ebb0f9", // X
  "#f3b3ca", // Y
  "#f2a7d1"  // Z
];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasContainer");
  noLoop();
  background("#fff0f6");
}

function draw() {
  background("#fff0f6");
  noStroke();
  fill("white");
  rect(0, 0, width, height);
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let x = random(width);
    let y = random(height);
    let c = colors[i % colors.length];
    fill(c);
    noStroke();
    if (isNaN(char)) {
      ellipse(x, y, 50, 50); // Letters = circles
    } else {
      rect(x, y, 50, 50); // Numbers = squares
    }
  }
}

function generate() {
  input = document.getElementById("inputString").value;
  redraw();
}

function downloadArt() {
  saveCanvas('abstract_art', 'png');
}
