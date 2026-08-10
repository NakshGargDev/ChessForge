import { getLegalMoves } from "../moveGenerator/getLegalMoves";
import { isInCheck } from "./isInCheck";

export function isCheckmate(board, isWhite) {

	const check = isInCheck(board, isWhite);

	if (!check) return;

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {

			const piece = board[row][col];

			if (piece === "") continue;

			const player = isWhite ? piece === piece.toUpperCase() : piece === piece.toLowerCase()

			if (player) {

				const moves = getLegalMoves(board, row, col);

				if (moves.length > 0) return false;

			}
		}
	}
	return true;
}
