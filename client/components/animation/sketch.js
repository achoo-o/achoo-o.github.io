let blobAmount = 10
let noiseMax = 5
let phase = 0
let zoff = 0

function windowResized() {
  //add min-width; same as mobile's min-width
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  describe('Polar perlin noise')
  // frameRate(20)
}

function draw() {
  background(14, 18, 17)
  shape(-100, -100)
  shape(width + 100, height + 100)
}

function shape(x, y) {
  translate(x, y)
  stroke(255)
  noFill()
  beginShape()
  for (let a = 0; a < TWO_PI; a += 0.001) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax)
    let yoff = map(sin(a), -1, 1, 0, noiseMax)
    let r = map(noise(xoff, yoff, zoff), 0, 1, 15, width - 20)
    let x = r * cos(a)
    let y = r * sin(a)
    vertex(x, y)
  }
  endShape(CLOSE)
  zoff += 0.0003
}
