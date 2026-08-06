import { slidingPiece } from "./slidingPiece.js";

export function bishopMoves(board, row, col) {

	const directions = [
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1]
	];

	return slidingPiece(board, row, col, directions);
}
