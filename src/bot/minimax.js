import { evaluateBoard } from "./evaluation.js";
import { getAllLegalMoves } from "./getAllLegalMoves.js";
import { makeTemporaryMove } from "./makeTemporaryMove.js";
import { isInCheck } from "../rules/isInCheck.js";
import { orderMoves } from "./moveOrdering.js";

export function minimax(depth, board, color, minimizingPlayer, alpha, beta) {

	if (depth === 0) {
		return evaluateBoard(board, color);
	}

	const isWhite = minimizingPlayer;
	const moves = getAllLegalMoves(board, isWhite);

	const orderedMoves = orderMoves(board, moves);

	if (moves.length === 0) {

		if (isInCheck(board, isWhite)) {
			return minimizingPlayer ? Infinity : -Infinity;
		}

		return 0;
	}

	if (!minimizingPlayer) {

		let bestScore = -Infinity;

		for (const move of orderedMoves) {

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

	for (const move of orderedMoves) {

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
