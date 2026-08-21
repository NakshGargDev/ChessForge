import { game } from "../game";

const mainMenu = document.querySelector("#main-menu");
const friend = document.querySelector("#friend");
const computer = document.querySelector("#computer");
const exit = document.querySelector("#exit");
const gameArea = document.querySelector("#game-area");

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
