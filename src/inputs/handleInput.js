import { handlePiece } from "./handlePiece.js";

export function handleInput(square, board) {

	square.addEventListener("click", () => {

		const row = Number(square.dataset.row);
		const col = Number(square.dataset.col);

		handlePiece(square, row, col, board);

	});

}
