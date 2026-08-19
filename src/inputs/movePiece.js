import { game } from "../game";
import { pieces } from "../pieces";
import { isCheckmate } from "../rules/checkmate.js";
import { findKing } from "../rules/findKing.js";
import { isInCheck } from "../rules/isInCheck.js"
import { isStalemate } from "../rules/stalemate.js";
import { showPromotion } from "../UI/promotion.js";
import { saveGameState } from "../game.js";
import { renderHistory } from "../UI/history.js";
import { botMove } from "../bot/makeMove.js";

export function movePiece(board, square, row, col) {

	const [oldRow, oldCol] = game.selected;

	const piece = board[oldRow][oldCol];

	saveGameState();

	if (
		piece === "P" &&
		board[row][col] === "" &&
		(col === oldCol - 1 || col === oldCol + 1)
	) {
		console.log("EN PASSANT HIT");
		console.log({ piece, oldRow, oldCol, row, col });

		board[oldRow][col] = "";

		document.querySelector(
			`.square[data-row="${oldRow}"][data-col="${col}"]`
		).textContent = "";
	}

	if (
		piece === "p" &&
		board[row][col] === "" &&
		(col === oldCol - 1 || col === oldCol + 1)
	) {
		board[oldRow][col] = "";

		document.querySelector(
			`.square[data-row="${oldRow}"][data-col="${col}"]`
		).textContent = "";
	}

	board[row][col] = piece;
	board[oldRow][oldCol] = ""
	game.selectedSquare.textContent = ""
	square.textContent = pieces[piece]

	if (piece === "K" && oldRow === 7 && oldCol === 4 && row === 7 && col === 6) {
		document.querySelector(`.square[data-row="7"][data-col="7"]`).textContent = "";
		document.querySelector(`.square[data-row="7"][data-col="5"]`).textContent = pieces["R"];
		board[7][7] = "";
		board[7][5] = "R";
	}

	if (piece === "K" && oldRow === 7 && oldCol === 4 && row === 7 && col === 2) {
		document.querySelector(`.square[data-row="7"][data-col="0"]`).textContent = "";
		document.querySelector(`.square[data-row="7"][data-col="3"]`).textContent = pieces["R"];

		board[7][0] = "";
		board[7][3] = "R";
	}


	if (piece === "k" && oldRow === 0 && oldCol === 4 && row === 0 && col === 6) {
		document.querySelector(`.square[data-row="0"][data-col="7"]`).textContent = "";
		document.querySelector(`.square[data-row="0"][data-col="5"]`).textContent = pieces["r"];

		board[0][7] = "";
		board[0][5] = "r";
	}


	if (piece === "k" && oldRow === 0 && oldCol === 4 && row === 0 && col === 2) {
		document.querySelector(`.square[data-row="0"][data-col="0"]`).textContent = "";
		document.querySelector(`.square[data-row="0"][data-col="3"]`).textContent = pieces["r"];

		board[0][0] = "";
		board[0][3] = "r";
	}


	if (piece === "K") game.whiteKingMoved = true;
	if (piece === "k") game.blackKingMoved = true;
	if (piece === "R" && oldRow === 7 && oldCol === 0) game.whiteLeftRookMoved = true;
	if (piece === "R" && oldRow === 7 && oldCol === 7) game.whiteRightRookMoved = true;

	if (piece === "r" && oldRow === 0 && oldCol === 0) game.blackLeftRookMoved = true;
	if (piece === "r" && oldRow === 0 && oldCol === 7) game.blackRightRookMoved = true;

	if (piece === "P" && row === 0) {
		game.promotion = {
			row,
			col,
			color: "white"
		};
		showPromotion()
	}

	if (piece === "p" && row === 7) {
		game.promotion = {
			row,
			col,
			color: "black"
		};
		showPromotion()
	}

	game.moveHistory.push({
		piece,
		from: [oldRow, oldCol],
		to: [row, col]
	});

	renderHistory();

	game.selected = null;
	game.selectedSquare = null
	game.lastMove = {
		piece,
		from: [oldRow, oldCol],
		to: [row, col]
	}

	document.querySelectorAll(".in-check")
		.forEach(sq => sq.classList.remove("in-check"));

	game.turn = game.turn === "white" ? "black" : "white";

	const message = document.querySelector("#game-message");

	if (isCheckmate(board, game.turn === "white")) {
		message.textContent = "CHECKMATE!";
	} else if (isStalemate(board, game.turn === "white")) {
		message.textContent = "STALEMATE!";
	} else if (isInCheck(board, game.turn === "white")) {
		const kingPos = findKing(board, game.turn === "white");

		const kingSquare = document.querySelector(
			`.square[data-row="${kingPos[0]}"][data-col="${kingPos[1]}"]`
		);

		kingSquare.classList.add("in-check");

		message.textContent = "CHECK!";
	} else {
		message.textContent = "";
	}
	document.querySelectorAll(".selected")
		.forEach(sq => sq.classList.remove("selected"));

	if (game.turn === "black") {
		setTimeout(() => {
			botMove(board);
		}, 0);
	}
}
