import { game } from "../game";

const mainMenu = document.querySelector("#main-menu");
const friend = document.querySelector("#friend");
const computer = document.querySelector("#computer");
const exit = document.querySelector("#exit");
const gameArea = document.querySelector("#game-area");

friend.addEventListener("click", () => {

	gameArea.style.display = "block";
	mainMenu.style.display = "none";

	game.mode = "friend";

});

computer.addEventListener("click", () => {

	gameArea.style.display = "block";
	mainMenu.style.display = "none";

	game.mode = "computer"
});

exit.addEventListener("click", () => {

	document.body.innerHTML = ""
	document.body.style.background = "white";

});
