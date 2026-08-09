import { pawnMoves } from "./pawn.js"
import { knightMoves } from "./knight.js";
import { bishopMoves } from "./bishop.js";
import { rookMoves } from "./rook.js";
import { queenMoves } from "./queen.js";
import { kingMoves } from "./king.js";
import { isInCheck } from "../rules/isInCheck.js";

export function getPiecesMoves(board, row, col) {

	const piece = board[row][col];

	let moves = [];

	switch (piece) {

		case "P":
		case "p":
			moves = pawnMoves(board, row, col);
			break

		case "N":
		case "n":
			moves = knightMoves(board, row, col);
			break

		case "B":
		case "b":
			moves = bishopMoves(board, row, col);
			break

		case "R":
		case "r":
			moves = rookMoves(board, row, col);
			break

		case "Q":
		case "q":
			moves = queenMoves(board, row, col);
			break

		case "K":
		case "k":
			moves = kingMoves(board, row, col);
			break

		default:
			return []
	}

	return moves;

}



export function getLegalMoves(board, row, col) {

	const moves = getPiecesMoves(board, row, col);

	const legalMoves = [];
	const piece = board[row][col]

	for (const [newRow, newCol] of moves) {
		const isWhite = piece === piece.toUpperCase();

		const boardCopy = board.map(row => [...row]);

		boardCopy[row][col] = "";
		boardCopy[newRow][newCol] = piece;

		const check = isInCheck(boardCopy, isWhite);

		if (!check) {
			legalMoves.push([newRow, newCol])
		}
	}

	return legalMoves
}
