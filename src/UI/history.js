import { game } from "../game.js";

const historyButton = document.querySelector("#history-btn");
const historyPanel = document.querySelector("#history-panel");
const historyClose = document.querySelector("#history-close");
const historyList = document.querySelector("#history-list");

historyButton.addEventListener("click", () => {
	historyPanel.style.display = "block";
});

historyClose.addEventListener("click", () => {
	historyPanel.style.display = "none";
});

export function renderHistory() {
	historyList.innerHTML = "";

	game.moveHistory.forEach((move, index) => {
		const moveElement = document.createElement("div");

		moveElement.textContent =
			`${index + 1}. ${move.piece}: ` +
			`${String.fromCharCode(97 + move.from[1])}${8 - move.from[0]} → ` +
			`${String.fromCharCode(97 + move.to[1])}${8 - move.to[0]}`;

		historyList.appendChild(moveElement);
	});
}
