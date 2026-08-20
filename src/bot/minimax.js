import { evaluateBoard } from "./evaluation.js";
import { getAllLegalMoves } from "./getAllLegalMoves.js";
import { makeTemporaryMove } from "./makeTemporaryMove.js";

let nodes = 0;

export function resetNodes() {
	nodes = 0;
}

export function getNodes() {
	return nodes;
}
export function minimax(depth, board, color, minimizingPlayer, alpha, beta) {

	nodes++;


	if (depth === 0) {
		return evaluateBoard(board, color);
	}

	const isWhite = minimizingPlayer;
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
				true,
				alpha,
				beta
			);

			bestScore = Math.max(bestScore, score);
			alpha = Math.max(alpha, bestScore);

			if (beta <= alpha) {
				break
			}
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
			false,
			alpha,
			beta
		);

		bestScore = Math.min(bestScore, score);
		beta = Math.min(beta, bestScore);

		if (beta <= alpha) {
			break
		}
	}

	return bestScore;
}
