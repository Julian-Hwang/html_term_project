var playerStateChar = "";
var playerState = 0;
var comStateChar = "";
var comState = 0;

var result = 0;

var win = 0;
var defeat = 0;
var draw = 0;

function play(num) {

	if (num == 1) {
		playerStateChar = "가위";
		playerState = 1;
	}
	else if (num == 2) {
		playerStateChar = "바위";
		playerState = 2;
	}
	else {
		playerStateChar = "보";
		playerState = 3;
	}
	setComState();
	setDistinct();
	showResult();
}

function setComState() {
	var state = Math.floor(Math.random() * 3) + 1;
	comState = state;

	if (state == 1) {
		comStateChar = "가위";
	}
	else if (state == 2) {
		comStateChar = "바위";
	}
	else {
		comStateChar = "보";
	}
}

function setDistinct() {
	if (playerState == comState) {
		result = 0;
	}
	else { 
		if (playerState == 1) {
			if (comState == 2) {
				result = -1;
			}
			else if (comState == 3) {
				result = 1;
			}
		}

		else if (playerState == 2) {
			if (comState == 1) {
				result = 1;
			}
			else if (comState == 3) {
				result = -1;
			}
		}

		else {
			if (comState == 1) {
				result = -1;
			}
			else if (comState == 2) {
				result = 1;
			}
		}
	}
}

function showResult() {
	if (result == 0) {
		draw++;
		alert("비겼습니다.");
		alert("승 : " + win + "\n패 : " + defeat + "\n무 : " + draw);
	}
	else if (result == 1) {
		win++;
		alert("이겼습니다.");
		alert("승 : " + win + "\n패 : " + defeat + "\n무 : " + draw);
	}
	else {
		defeat++;
		alert("졌습니다.");
		alert("승 : " + win + "\n패 : " + defeat + "\n무 : " + draw);
	}
}