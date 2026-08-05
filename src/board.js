import { handleInput } from "./inputs/handleInput.js";
import { drawPiece } from "./pieces.js"

export const board = [
	["r", "n", "b", "q", "k", "b", "n", "r"],
	["p", "p", "p", "p", "p", "p", "p", "p"],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", ""],
	["P", "P", "P", "P", "P", "P", "P", "P"],
	["R", "N", "B", "Q", "K", "B", "N", "R"]
];

export function createBoard() {

	const box = document.querySelector("#board");

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {

			const square = document.createElement("div");

			square.classList.add("square");

			box.appendChild(square);

			square.dataset.row = row;
			square.dataset.col = col;

			handleInput(square, board)

			if ((row + col) % 2 == 0) {
				square.classList.add("light")
			} else {
				square.classList.add("dark");
			}

			drawPiece(board, row, col, square)

		}

	}
}
