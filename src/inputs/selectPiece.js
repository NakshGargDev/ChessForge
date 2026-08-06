import { game } from "../game";
import { getLegalMoves } from "../moveGenerator/getLegalMoves.js";
import { movePiece } from "./movePiece.js"

export function selectPiece(square, row, col, board) {

	const piece = board[row][col];

	if (game.selected) {

		if (game.selected[0] === row && game.selected[1] === col) {
			game.selected = null;
			game.selectedSquare = null
			square.classList.remove("selected")
			clearHighlights()
		} else if (piece === "") {
			const [oldRow, oldCol] = game.selected;

			const moves = getLegalMoves(board, oldRow, oldCol)

			const allowed = moves.some(move => move[0] === row && move[1] === col)


			if (allowed) {
				movePiece(board, square, row, col)
				clearHighlights()
			}

		}
	} else {
		if (piece === "") return;

		if (piece === piece.toUpperCase() && game.turn === "black") return;
		if (piece === piece.toLowerCase() && game.turn === "white") return;

		game.selected = [row, col]
		game.selectedSquare = square
		square.classList.add("selected")

		const moves = getLegalMoves(board, row, col);
		highlightMoves(moves)
	}
}

function highlightMoves(moves) {

	clearHighlights();

	for (const [row, col] of moves) {

		const square = document.querySelector(
			`[data-row="${row}"][data-col="${col}"]`
		);

		if (square) {
			square.classList.add("legal");
		}
	}
}

function clearHighlights() {

	document.querySelectorAll(".legal").forEach(square => {
		square.classList.remove("legal");
	});

}
