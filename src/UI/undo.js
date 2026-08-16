import { restoreGameState } from "../game.js";
import { renderBoard } from "../board.js";
import { game } from "../game.js";
import { renderHistory } from "./history.js";

const undoButton = document.querySelector("#undo-btn");

if (game.undoHistory.length === 0) undoButton.style.display = "none";

undoButton.addEventListener("click", () => {
	restoreGameState();
	renderBoard();

	renderHistory()

	if (game.undoHistory.length === 0) {
		undoButton.style.display = "none";
	}
});
