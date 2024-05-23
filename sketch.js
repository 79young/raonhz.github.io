let viewGraphics
function setup() {
	createCanvas(windowWidth, windowHeight);
	viewGraphics = createGraphics(width, height);
	viewGraphics.background(0);
	// viewGraphics.ellipse(0,0,width/2,height/2)
}
let CR,CG,CB,CD;

function draw() {
	
	viewGraphics.push()
	// 	// background(255)
	// 	// let lastX=0,lastY=0;
		viewGraphics.image(viewGraphics,0,2)

		viewGraphics.beginShape()
  

		viewGraphics.strokeWeight(1)
		viewGraphics.noFill()
		viewGraphics.translate(0,-200)
		let graphicRatio = noise(frameCount/50,width/50)*1.5
		for(let x=0;x<width;x+=5){
			let y =
					graphicRatio*sin(x/80+frameCount/50)*50+
					graphicRatio*sin(x/20+frameCount/50)*20
			+graphicRatio*noise(x/100,frameCount/50)
			*noise(x/500,frameCount/50)
			*(map(sin(x/
							 (10+ noise(x/2000,frameCount/500)*40)
							 ),-1,1,0,1) )
			*height/5+height/3
			+noise(x/50,frameCount/50)*100
			;
			// fill(0)
			viewGraphics.curveVertex(x,y)

			if (y>height*sin(0.45,0.9)){
                CR = (93  + cos(x)*50);
                CG = (random(126,210) + cos(x*1.2+y/10)*50);
                CB = (random(210,244) + cos(x*PI / sin(6))*30);
                CD = (random(50,90) + cos(x*1.2*PI));
				viewGraphics.push()
					viewGraphics.noStroke()
					viewGraphics.fill(CR, CG, CB,CD )
					viewGraphics.ellipse(x +random(-1,1),y+random(-1,1),5)
				viewGraphics.pop()
			}
		}
		viewGraphics.stroke(255,map(sin(frameCount/(20+ (1-graphicRatio) *500) ),-1,1,50,255) )
		viewGraphics.endShape()
	viewGraphics.pop()

	image(viewGraphics,0,0)


	push()
		fill(255)
		textSize(60)
		textStyle(BOLD)
		text("Media Artist Y.",40,120)
	pop()
	// push()
	// 	fill(255)
	// 	textSize(200)
	// 	textStyle(BOLD)
	// 	text("0",400,220)
	// pop()
	
		// ellipse(mouseX, mouseY, 20, 20);
}
