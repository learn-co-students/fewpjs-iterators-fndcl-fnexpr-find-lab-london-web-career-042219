const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
	const win = array.find((obj) => {return obj.result == "W"})
	if(win) {
		return win.year
	}
	else {
		return undefined
	}
}
