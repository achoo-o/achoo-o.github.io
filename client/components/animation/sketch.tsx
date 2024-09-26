import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

export default function Art() {
  function sketch(p5) {
    const noiseMax = 5
    let zoff = 0

    p5.windowResized = () => {
      //add min-width; same as mobile's min-width
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }

    p5.setup = () => {
      const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
      canvas.position(0, 0)
      canvas.style('z-index', '-1')
      p5.describe('Polar perlin noise')
      // frameRate(20)
    }

    p5.draw = () => {
      p5.background(14, 18, 17)
      shape(-100, -100)
      shape(p5.width + 100, p5.height + 100)
    }

    function shape(x:number, y:number) {
      p5.translate(x, y)
      p5.stroke(210)
      p5.noFill()
      p5.beginShape()
      for (let a = 0; a < p5.TWO_PI; a += 0.001) {
        const xoff = p5.map(p5.cos(a), -1, 1, 0, noiseMax)
        const yoff = p5.map(p5.sin(a), -1, 1, 0, noiseMax)
        const r = p5.map(p5.noise(xoff, yoff, zoff), 0, 1, 15, p5.width - 20)
        const x = r * p5.cos(a)
        const y = r * p5.sin(a)
        p5.vertex(x, y)
      }
      p5.endShape(p5.CLOSE)
      zoff += 0.0003
    }
  }

  return <ReactP5Wrapper sketch={sketch} />;

}






