const buttonSound = new Audio("/sounds/button.wav");
const moveSound = new Audio("/sounds/move.wav");
const captureSound = new Audio("/sounds/capture.wav");
const checkSound = new Audio("/sounds/check.wav");
const castleSound = new Audio("/sounds/castle.wav");
const promotionSound = new Audio("/sounds/promotion.wav");

export function playButton() {
	buttonSound.currentTime = 0;
	buttonSound.play();
}

export function playMove() {
	moveSound.currentTime = 0.2;
	moveSound.play();
}

export function playCapture() {
	captureSound.currentTime = 0.2;
	captureSound.play()
}

export function playCheck() {
	checkSound.currentTime = 0;
	checkSound.play()
}

export function playCastle() {
	castleSound.currentTime = 0;
	castleSound.play();
}

export function playPromotion() {
	promotionSound.currentTime = 0.3;
	promotionSound.play()
}
