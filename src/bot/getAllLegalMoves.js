import { getLegalMoves } from "../moveGenerator//getLegalMoves.js";

export function getAllLegalMoves(board, isWhite) {

	const allMoves = [];

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col];

			if (piece === "") continue;

			if (isWhite && piece === piece.toLowerCase()) continue;

			if ((!isWhite) && piece === piece.toUpperCase()) continue;

			const moves = getLegalMoves(board, row, col)

			for (const [newRow, newCol] of moves) {
				allMoves.push(
					{
						from: [row, col],
						to: [newRow, newCol]
					}
				)
			}
		}
	}
	return allMoves
}
