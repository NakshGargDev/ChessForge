import { game } from "../game";

export function pawnMoves(board, row, col) {
	const moves = [];

	const piece = board[row][col];

	const last = game.lastMove;

	if (piece === "P") {

		if (board[row - 1][col] === "") {
			moves.push([row - 1, col])
		}
		if (col > 0 && board[row - 1][col - 1] === board[row - 1][col - 1].toLowerCase() && board[row - 1][col - 1] !== "") {
			moves.push([row - 1, col - 1])
		}
		if (col < 7 && board[row - 1][col + 1] === board[row - 1][col + 1].toLowerCase() && board[row - 1][col + 1] !== "") {
			moves.push([row - 1, col + 1])
		}
		if (row === 6 && board[row - 2][col] === "" && board[row - 1][col] === "") {
			moves.push([row - 2, col])
		}

		if (
			last &&
			last.piece === "p" &&
			last.from[0] === 1 &&
			last.to[0] === 3 &&
			(last.to[1] === col + 1 || last.to[1] === col - 1) &&
			row === 3
		) {

			if (last.to[1] === col + 1) {
				moves.push([row - 1, col + 1])
			} else {
				moves.push([row - 1, col - 1])
			}

		}
	}

	if (piece === "p") {

		if (board[row + 1][col] === "") {
			moves.push([row + 1, col])
		}
		if (col < 7 && board[row + 1][col + 1] === board[row + 1][col + 1].toUpperCase() && board[row + 1][col + 1] !== "") {
			moves.push([row + 1, col + 1])
		}
		if (col > 0 && board[row + 1][col - 1] === board[row + 1][col - 1].toUpperCase() && board[row + 1][col - 1] !== "") {
			moves.push([row + 1, col - 1])
		}
		if (row === 1 && board[row + 2][col] === "" && board[row + 1][col] === "") {
			moves.push([row + 2, col])
		}

		if (
			last &&
			last.piece === "P" &&
			last.from[0] === 6 &&
			last.to[0] === 4 &&
			(last.to[1] === col - 1 || last.to[1] === col + 1) &&
			row === 4
		) {
			if (last.to[1] === col + 1) {
				moves.push([row + 1, col + 1])
			} else {
				moves.push([row + 1, col - 1])
			}
		}

	}
	return moves
}
