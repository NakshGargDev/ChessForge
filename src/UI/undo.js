import { restoreGameState } from "../game.js";
import { renderBoard } from "../board.js";
import { game } from "../game.js";
import { renderHistory } from "./history.js";
import { playButton } from "./soundManger.js";

export const undoButton = document.querySelector("#undo-btn");

if (game.undoHistory.length === 0) undoButton.style.display = "none";

undoButton.addEventListener("click", () => {
	playButton()
	if (game.mode === "computer") {
		restoreGameState()
		restoreGameState()
	} else {
		restoreGameState();
	}
	renderBoard();

	renderHistory()

	if (game.undoHistory.length === 0) {
		undoButton.style.display = "none";
	}
});
