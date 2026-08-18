import { game } from "../game.js";
import { getAllLegalMoves } from './getAllLegalMoves.js';
import { movePiece } from "../inputs/movePiece.js";

function chooseRandomMove(moves) {
	if (moves.length === 0) return null;

	const randomIndex = Math.floor(Math.random() * moves.length);

	return moves[randomIndex];
}

export function botMove(board) {

	const allMoves = getAllLegalMoves(board, false);

	const move = chooseRandomMove(allMoves);

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
