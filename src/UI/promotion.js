import { game } from "../game";
import { board } from "../board";
import { pieces } from "../pieces.js";
import { clearHighlights } from "../inputs/handlePiece.js";
import { playPromotion } from "./soundManger.js";
import { botMove } from "../bot/makeMove.js";

const promotionMenu = document.querySelector("#promotion-menu")

const queenButton = document.querySelector(".promotion-queen");
const rookButton = document.querySelector(".promotion-rook");
const bishopButton = document.querySelector(".promotion-bishop");
const knightButton = document.querySelector(".promotion-knight");

queenButton.addEventListener("click", () => {

	game.isPromoting = false

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "Q" : "q";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]

	hidePromotion()

	if (game.turn === "black" && game.mode === "computer" && !game.checkmated) {
		botMove(board)
	}
})

rookButton.addEventListener("click", () => {

	game.isPromoting = false

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "R" : "r";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]

	hidePromotion()

	if (game.turn === "black" && game.mode === "computer" && !game.checkmated) {
		botMove(board)
	}
})

bishopButton.addEventListener("click", () => {

	game.isPromoting = false;

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "B" : "b";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]

	hidePromotion()

	if (game.turn === "black" && game.mode === "computer" && !game.checkmated) {
		botMove(board)
	}
})

knightButton.addEventListener("click", () => {

	game.isPromoting = false

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "N" : "n";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]

	hidePromotion()

	if (game.turn === "black" && game.mode === "computer" && !game.checkmated) {
		botMove(board)
	}

})

export function showPromotion() {
	promotionMenu.style.display = "flex";
}

export function hidePromotion() {
	promotionMenu.style.display = "none";

	clearHighlights()

	document.querySelectorAll(".selected").forEach(sq => sq.classList.remove("selected"));

	game.promotion = null;
}

