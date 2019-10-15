
let paint_mode = false

let shape_mode = false

function mouseClicked() {
	print(int(mouseX), int(mouseY))
}

function setup() {
	
	let canvas = createCanvas(400, 300)
	canvas.parent("p5")

	//noStroke()
	rect(0, 0, width, height)
	noFill()

	stroke(0)
	ellipse(width/2, height/1.8, 20, 140)


	beginShape()
		curveVertex(208, 125)
		curveVertex(208, 125)
		curveVertex(250, 72)
		curveVertex(296, 47)
		curveVertex(346, 63)
		curveVertex(369, 79)
		curveVertex(369, 79)
	endShape()

	beginShape()
		curveVertex(368, 80)
		curveVertex(368, 80)
		curveVertex(354, 95)
		curveVertex(354, 119)
		curveVertex(342, 129)
		curveVertex(336, 145)
		curveVertex(286, 169)
		curveVertex(209, 157)
		curveVertex(209, 157)
	endShape()

	beginShape()
		curveVertex(261, 169)
		curveVertex(261, 169)
		curveVertex(314, 189)
		curveVertex(327, 205)
		curveVertex(313, 216)
		curveVertex(314, 231)
		curveVertex(303, 238)
		curveVertex(306, 250)
		curveVertex(293, 257)
		curveVertex(256, 246)
		curveVertex(207, 213)
		curveVertex(207, 213)
	endShape()

	beginShape()
		curveVertex(191, 123)
		curveVertex(191, 123)
		curveVertex(118, 56)
		curveVertex(67, 60)
		curveVertex(35, 80)
		curveVertex(35, 80)
	endShape()

	beginShape()
		curveVertex(34, 82)
		curveVertex(34, 82)
		curveVertex(44, 98)
		curveVertex(39, 112)
		curveVertex(44, 125)
		curveVertex(45, 133)
		curveVertex(51, 141)
		curveVertex(97, 163)
		curveVertex(188, 153)
		curveVertex(188, 153)
	endShape()

	beginShape()
		curveVertex(136, 162)
		curveVertex(136, 162)
		curveVertex(87, 188)
		curveVertex(75, 200)
		curveVertex(87, 212)
		curveVertex(81, 224)
		curveVertex(89, 230)
		curveVertex(90, 245)
		curveVertex(122, 252)
		curveVertex(191, 212)
		curveVertex(191, 212)
	endShape()

	ellipse(292, 81, 40, 25)
	ellipse(98, 81, 40, 25)

	beginShape()
		curveVertex(218, 125)
		curveVertex(218, 125)
		curveVertex(271, 66)
		curveVertex(292, 56)
		curveVertex(316, 66)
		curveVertex(315, 92)
		curveVertex(218, 124)
		curveVertex(218, 124)
	endShape()

	beginShape()
		curveVertex(182, 124)
		curveVertex(182, 124)
		curveVertex(115, 65)
		curveVertex(86, 62)
		curveVertex(71, 73)
		curveVertex(72, 88)
		curveVertex(88, 98)
		curveVertex(179, 124)
		curveVertex(179, 124)
	endShape()

	ellipse(59, 110, 25, 25)
	ellipse(71, 134, 20, 20)
	ellipse(94, 146, 15, 15)
	ellipse(334, 106, 25, 25)
	ellipse(322, 129, 20, 20)
	ellipse(301, 147, 15, 15)

	ellipse(114, 228, 30, 15)
	ellipse(141, 213, 25, 10)
	ellipse(275, 233, 30, 15)
	ellipse(249, 211, 25, 10)

	beginShape()
		curveVertex(181, 161)
		curveVertex(181, 161)
		curveVertex(165, 181)
		curveVertex(126, 203)
		curveVertex(93, 219)
		curveVertex(94, 233)
		curveVertex(111, 241)
		curveVertex(134, 234)
		curveVertex(162, 214)
		curveVertex(184, 183)
		curveVertex(181, 161)
		curveVertex(181, 161)
	endShape()

	beginShape()
		curveVertex(215, 164)
		curveVertex(215, 164)
		curveVertex(226, 180)
		curveVertex(258, 200)
		curveVertex(280, 212)
		curveVertex(295, 224)
		curveVertex(292, 241)
		curveVertex(275, 245)
		curveVertex(252, 231)
		curveVertex(228, 210)
		curveVertex(214, 183)
		curveVertex(215, 164)
		curveVertex(215, 164)
	endShape()

	beginShape()
		curveVertex(320, 52)
		curveVertex(320, 52)
		curveVertex(332, 67)
		curveVertex(326, 87)
		curveVertex(309, 114)
		curveVertex(285, 142)
		curveVertex(266, 152)
		curveVertex(235, 160)
		curveVertex(235, 160)
	endShape()

	beginShape()
		curveVertex(67, 60)
		curveVertex(67, 60)
		curveVertex(57, 76)
		curveVertex(64, 91)
		curveVertex(78, 108)
		curveVertex(91, 128)
		curveVertex(111, 145)
		curveVertex(135, 153)
		curveVertex(165, 154)
		curveVertex(165, 154)
	endShape()

	beginShape()
		curveVertex(198, 97)
		curveVertex(198, 97)
		curveVertex(189, 61)
		curveVertex(169, 30)
		curveVertex(153, 28)
		curveVertex(147, 38)
		curveVertex(157, 43)
		curveVertex(157, 43)
	endShape()

	beginShape()
		curveVertex(201, 97)
		curveVertex(201, 97)
		curveVertex(208, 65)
		curveVertex(219, 36)
		curveVertex(232, 22)
		curveVertex(246, 24)
		curveVertex(249, 33)
		curveVertex(238, 36)
		curveVertex(238, 36)
	endShape()

	textSize(12)
	text('1', 198, 147)
	text('3', 142, 132)
	text('3', 254, 129)
	text('6', 268, 98)
	text('6', 132, 95)
	text('4', 288, 82)
	text('4', 97, 80)
	text('7', 342, 75)
	text('7', 49, 81)
	text('4', 279, 192)
	text('4', 121, 183)
	text('3', 232, 193)
	text('3', 159, 195)
	text('2', 274, 232)
	text('2', 117, 227)
	text('2', 247, 210)
	text('2', 141, 213)
	text('5', 39, 240)
	text('2', 333, 105)
	text('2', 60, 107)
	text('3', 323, 128)
	text('3', 70, 134)
	text('1', 299, 146)
	text('1', 93, 146)

}


function draw () {


	if (paint_mode == true) {

		vertex(mouseX, mouseY)
		strokeWeight(8)
		line(mouseX, mouseY, mouseX, mouseY)
	}
}

	function mousePressed() {
		paint_mode = true

		}

	function mouseReleased() {
		paint_mode = false

		}

	function colorBlue() {
		stroke(0, 0, 255, 100)
		}

	function colorRed() {
		stroke(255, 0, 0, 100)

		}

	function colorGreen() {
		stroke(0, 150, 3, 100)

		}

	function colorOrange() {
		stroke(255, 153, 0)
	}

	function colorYellow() {
		stroke(255, 234, 0)
	}

	function colorPurple() {
		stroke(140, 0, 255)
	}

	function colorBlack() {
		stroke(0)
	}

	function eraser() {
		stroke(255)

	}

function shape() {

	if (shape_mode == true) {
		ellipse(mouseX, mouseY, 5, 5)
		strokeWeight(3)

	}

	function mousePressed(){
		shape_mode = true
	}

	function mouseReleased() {
		shape_mode = false
	}

}





	

