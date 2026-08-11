import { game } from "../game.js";
import { isInCheck } from "./isInCheck.js";

export function whiteKingSideCastle(board) {
	if (board[7][7] !== "R") return false;
	if (board[7][5] === "") {
		if (board[7][6] === "") {
			if ((!game.whiteKingMoved) && (!game.whiteRightRookMoved)) {
				if (!(isInCheck(board, true))) {
					const boardCopy = board.map(row => [...row]);

					boardCopy[7][5] = "K";
					boardCopy[7][4] = "";

					const check = isInCheck(boardCopy, true);

					if (!check) {
						const boardCopy2 = board.map(row => [...row]);

						boardCopy2[7][6] = "K";
						boardCopy2[7][4] = "";

						const check2 = isInCheck(boardCopy2, true);

						if (!check2) {
							return true;
						}
					}
				}
			}
		}
	}
	return false;
}

export function whiteQueenSideCastle(board) {
	if (board[7][0] !== "R") return false;
	if (board[7][3] === "") {
		if (board[7][2] === "") {
			if (board[7][1] === "") {
				if ((!game.whiteKingMoved) && (!game.whiteLeftRookMoved)) {
					if (!(isInCheck(board, true))) {
						const boardCopy = board.map(row => [...row]);

						boardCopy[7][3] = "K";
						boardCopy[7][4] = "";

						const check = isInCheck(boardCopy, true);

						if (!check) {
							const boardCopy2 = board.map(row => [...row]);

							boardCopy2[7][2] = "K";
							boardCopy2[7][4] = "";

							const check2 = isInCheck(boardCopy2, true);

							if (!check2) {
								return true;
							}
						}
					}
				}
			}
		}
	}
	return false;
}

export function blackKingSideCastle(board) {
	if (board[0][7] !== "r") return false;
	if (board[0][5] === "") {
		if (board[0][6] === "") {
			if ((!game.blackKingMoved) && (!game.blackRightRookMoved)) {
				if (!(isInCheck(board, false))) {
					const boardCopy = board.map(row => [...row]);

					boardCopy[0][5] = "k";
					boardCopy[0][4] = "";

					const check = isInCheck(boardCopy, false);

					if (!check) {
						const boardCopy2 = board.map(row => [...row]);

						boardCopy2[0][6] = "k";
						boardCopy2[0][4] = "";

						const check2 = isInCheck(boardCopy2, false);

						if (!check2) {
							return true;
						}
					}
				}
			}
		}
	}
	return false;
}

export function blackQueenSideCastle(board) {
	if (board[0][0] !== "r") return false;
	if (board[0][3] === "") {
		if (board[0][2] === "") {
			if (board[0][1] === "") {
				if ((!game.blackKingMoved) && (!game.blackLeftRookMoved)) {
					if (!(isInCheck(board, false))) {
						const boardCopy = board.map(row => [...row]);

						boardCopy[0][3] = "k";
						boardCopy[0][4] = "";

						const check = isInCheck(boardCopy, false);

						if (!check) {
							const boardCopy2 = board.map(row => [...row]);

							boardCopy2[0][2] = "k";
							boardCopy2[0][4] = "";

							const check2 = isInCheck(boardCopy2, false);

							if (!check2) {
								return true;
							}
						}
					}
				}
			}
		}
	}
	return false;
}
