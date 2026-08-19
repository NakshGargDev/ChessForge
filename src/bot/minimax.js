import { evaluateBoard } from "./evaluation.js";
import { getAllLegalMoves } from "./getAllLegalMoves.js";
import { makeTemporaryMove } from "./makeTemporaryMove.js";

export function minimax(depth, board, color, minimizingPlayer) {


	if (depth === 0) {
		return evaluateBoard(board, color);
	}

	const isWhite = color === "white";
	const moves = getAllLegalMoves(board, isWhite);

	if (moves.length === 0) {
		return evaluateBoard(board, color);
	}

	if (!minimizingPlayer) {

		let bestScore = -Infinity;

		for (const move of moves) {

			const boardCopy = makeTemporaryMove(board, move);
			const score = minimax(
				depth - 1,
				boardCopy,
				color,
				true
			);

			bestScore = Math.max(bestScore, score);
		}

		return bestScore;
	}

	let bestScore = Infinity;

	for (const move of moves) {

		const boardCopy = makeTemporaryMove(board, move);
		const score = minimax(
			depth - 1,
			boardCopy,
			color,
			false
		);

		bestScore = Math.min(bestScore, score);
	}

	return bestScore;
}
