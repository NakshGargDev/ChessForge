import { game } from "../game";
import { board } from "../board";
import { pieces } from "../pieces.js";
import { clearHighlights } from "../inputs/handlePiece.js";
import { playPromotion } from "./soundManger.js";

const promotionMenu = document.querySelector("#promotion-menu")

const queenButton = document.querySelector(".promotion-queen");
const rookButton = document.querySelector(".promotion-rook");
const bishopButton = document.querySelector(".promotion-bishop");
const knightButton = document.querySelector(".promotion-knight");

queenButton.addEventListener("click", () => {

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "Q" : "q";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]
	hidePromotion()
})

rookButton.addEventListener("click", () => {

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "R" : "r";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]

	hidePromotion()

})

bishopButton.addEventListener("click", () => {

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "B" : "b";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]

	hidePromotion()
})

knightButton.addEventListener("click", () => {

	playPromotion()

	const { row, col, color } = game.promotion;

	const piece = color === "white" ? "N" : "n";
	board[row][col] = piece

	document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`).textContent = pieces[piece]

	hidePromotion()

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

