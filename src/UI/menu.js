import { game, resetGame } from "../game";
import { renderHistory } from "./history";
import { undoButton } from "./undo";

const mainMenu = document.querySelector("#main-menu");
const friend = document.querySelector("#friend");
const computer = document.querySelector("#computer");
const exit = document.querySelector("#exit");
const gameArea = document.querySelector("#game-area");

const mainMenuBtn = document.querySelector("#main-menu-btn")

const newGameBtn = document.querySelector("#new-game-btn")

friend.addEventListener("click", () => {

	setTimeout(() => {
		gameArea.style.display = "block";
		mainMenu.style.display = "none";

		game.mode = "friend";
	}, 200)

});

computer.addEventListener("click", () => {

	setTimeout(() => {
		gameArea.style.display = "block";
		mainMenu.style.display = "none";

		game.mode = "computer"

	}, 200)
});

exit.addEventListener("click", () => {

	setTimeout(() => {
		document.body.innerHTML = ""
		document.body.style.background = "white";
	}, 200)
});

mainMenuBtn.addEventListener("click", () => {

	setTimeout(() => {
		resetGame()
		gameArea.style.display = "none";
		mainMenu.style.display = "flex";

		game.mode = null;
	}, 200)
});

newGameBtn.addEventListener("click", () => {
	resetGame();
	renderHistory();
	undoButton.style.display = "none"
});
