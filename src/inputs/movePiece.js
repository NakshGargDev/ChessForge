import { game } from "../game";
import { pieces } from "../pieces";

export function movePiece(board, square, row, col) {

	const [oldRow, oldCol] = game.selected;

	const piece = board[oldRow][oldCol];

	board[row][col] = piece;
	board[oldRow][oldCol] = "";

	game.selectedSquare.textContent = ""
	square.textContent = pieces[piece]

	game.selected = null;
	game.selectedSquare = null;

	document.querySelectorAll(".selected")
		.forEach(sq => sq.classList.remove("selected"));
}
