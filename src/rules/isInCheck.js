import { getLegalMoves } from "../moveGenerator/getLegalMoves";
import { findKing } from "./findKing";

export function isInCheck(board, isWhite) {
	const kingPos = findKing(board, isWhite);

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col];

			if (piece === "") continue;

			const opponent = isWhite ? piece === piece.toLowerCase() : piece === piece.toUpperCase();

			if (opponent) {
				const moves = getLegalMoves(board, row, col);

				const isCheck = moves.some(move => move[0] === kingPos[0] && move[1] === kingPos[1])

				if (isCheck) return true;

			}

		}
	}
	return false;
}
