import { selectPiece } from "./selectPiece";

export function handleInput(square, board) {

	square.addEventListener("click", () => {

		const row = Number(square.dataset.row);
		const col = Number(square.dataset.col);

		selectPiece(square, row, col, board);

	});

}
