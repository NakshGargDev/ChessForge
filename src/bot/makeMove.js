import { game } from "../game.js";
import { getAllLegalMoves } from "./getAllLegalMoves.js";
import { minimax } from "./minimax.js";
import { movePiece } from "../inputs/movePiece.js";
import { makeTemporaryMove } from "./makeTemporaryMove.js";

function chooseBestMove(board, moves, depth) {

	let bestMove = null;
	let bestScore = -Infinity;

	let alpha = -Infinity;

	for (const move of moves) {

		const boardCopy = makeTemporaryMove(board, move);
		const score = minimax(
			depth - 1,
			boardCopy,
			"black",
			true,
			alpha,
			Infinity
		);

		if (score > bestScore) {
			bestScore = score;
			bestMove = move;
		}

		alpha = Math.max(alpha, bestScore)

	}

	return bestMove;
}

export function botMove(board) {

	const allMoves = getAllLegalMoves(board, false);

	const move = chooseBestMove(board, allMoves, 3);

	if (!move) return;

	const [fromRow, fromCol] = move.from;
	const [toRow, toCol] = move.to;

	const fromSquare = document.querySelector(
		`[data-row="${fromRow}"][data-col="${fromCol}"]`
	);

	const toSquare = document.querySelector(
		`[data-row="${toRow}"][data-col="${toCol}"]`
	);

	game.selected = [fromRow, fromCol];
	game.selectedSquare = fromSquare;

	movePiece(board, toSquare, toRow, toCol);
}
