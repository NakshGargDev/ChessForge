import { game } from "../game";
import { pieces } from "../pieces";
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

	game.turn = game.turn === "white" ? "black" : "white";

	const check = isInCheck(board, game.turn === "white")

	if (check) {
		console.log("check");
	}

	document.querySelectorAll(".selected")
		.forEach(sq => sq.classList.remove("selected"));
}
