import { pawnMoves } from "./pawn.js";
import { knightMoves } from "./knight.js";
import { bishopMoves } from "./bishop.js";
import { rookMoves } from "./rook.js";
import { queenMoves } from "./queen.js";

export function getLegalMoves(board, row, col) {

	const piece = board[row][col];

	switch (piece) {

		case "P":
		case "p":
			return pawnMoves(board, row, col);

		case "N":
		case "n":
			return knightMoves(board, row, col);

		case "B":
		case "b":
			return bishopMoves(board, row, col);

		case "R":
		case "r":
			return rookMoves(board, row, col);

		case "Q":
		case "q":
			return queenMoves(board, row, col);

		default:
			return []
	}
}
