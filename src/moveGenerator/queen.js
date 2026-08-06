import { slidingPiece } from "./slidingPiece.js";

export function queenMoves(board, row, col) {

	const directions = [
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1],
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1]
	];

	return slidingPiece(board, row, col, directions);
}
