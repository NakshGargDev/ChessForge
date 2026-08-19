import { game } from "../game.js";
import { getAllLegalMoves } from "./getAllLegalMoves.js";
import { minimax } from "./minimax.js";
import { movePiece } from "../inputs/movePiece.js";
import { makeTemporaryMove } from "./makeTemporaryMove.js";

function chooseBestMove(board, moves, depth) {

	let bestMove = null;
	let bestScore = -Infinity;

	for (const move of moves) {

		const boardCopy = makeTemporaryMove(board, move);
		const score = minimax(
			depth - 1,
			boardCopy,
			"black",
			true
		);

		if (score > bestScore) {
			bestScore = score;
			bestMove = move;
		}
	}

	return bestMove;
}

export function botMove(board) {

	const allMoves = getAllLegalMoves(board, false);

	const move = chooseBestMove(board, allMoves, 1);

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

	// Actual game move — only here
	movePiece(board, toSquare, toRow, toCol);
}
