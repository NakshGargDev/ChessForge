import { movePiece } from "./movePiece";
import { selectPiece } from "./selectPiece";

export function handleInput(square, board) {

	square.addEventListener("click", () => {

		const row = Number(square.dataset.row);
		const col = Number(square.dataset.col);

		const piece = board[row][col];

		const select = selectPiece(piece, square, row, col);

		if (select) {
			movePiece(board, square, row, col)
		}

	});
}
