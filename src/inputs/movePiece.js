import { game } from "../game";
import { pieces } from "../pieces";
import { isCheckmate } from "../rules/checkmate.js";
import { findKing } from "../rules/findKing.js";
import { isInCheck } from "../rules/isInCheck.js"

export function movePiece(board, square, row, col) {

	const [oldRow, oldCol] = game.selected;

	const piece = board[oldRow][oldCol];

	board[row][col] = piece;
	board[oldRow][oldCol] = "";

	game.selectedSquare.textContent = ""
	square.textContent = pieces[piece]

	game.selected = null;
	game.selectedSquare = null;

	document.querySelectorAll(".in-check")
		.forEach(sq => sq.classList.remove("in-check"));

	game.turn = game.turn === "white" ? "black" : "white";

	const message = document.querySelector("#game-message");

	if (isCheckmate(board, game.turn === "white")) {
		message.textContent = "CHECKMATE!";
		console.log(isCheckmate(board, game.turn === "white"));
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
}
