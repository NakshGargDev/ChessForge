import { slidingPiece } from "./slidingPiece.js";

export function rookMoves(board, row, col) {

	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1]
	];

	return slidingPiece(board, row, col, directions);
}
