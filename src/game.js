import { board } from "./board.js";
import { renderBoard } from "./board.js";

export const game = {
	selected: null,
	selectedSquare: null,
	turn: "white",

	whiteKingMoved: false,
	blackKingMoved: false,

	whiteLeftRookMoved: false,
	whiteRightRookMoved: false,

	blackLeftRookMoved: false,
	blackRightRookMoved: false,

	lastMove: null,

	promotion: null,

	undoHistory: [],
	moveHistory: [],

	isBotMove: false
};

export function saveGameState() {
	const state = {
		board: board.map(row => [...row]),
		turn: game.turn,

		whiteKingMoved: game.whiteKingMoved,
		blackKingMoved: game.blackKingMoved,

		whiteLeftRookMoved: game.whiteLeftRookMoved,
		whiteRightRookMoved: game.whiteRightRookMoved,
		blackLeftRookMoved: game.blackLeftRookMoved,
		blackRightRookMoved: game.blackRightRookMoved,

		lastMove: game.lastMove
			? {
				...game.lastMove,
				from: [...game.lastMove.from],
				to: [...game.lastMove.to]
			}
			: null,

		promotion: game.promotion,
		moveHistory: game.moveHistory.map(move => ({
			...move,
			from: [...move.from],
			to: [...move.to]
		}))
	};

	game.undoHistory.push(state);

	document.querySelector("#undo-btn").style.display = "block";

}

export function restoreGameState() {
	const state = game.undoHistory.pop();

	if (!state) return;

	state.board.forEach((row, r) => {
		row.forEach((piece, c) => {
			board[r][c] = piece;
		});
	});

	game.turn = state.turn;

	game.whiteKingMoved = state.whiteKingMoved;
	game.blackKingMoved = state.blackKingMoved;

	game.whiteLeftRookMoved = state.whiteLeftRookMoved;
	game.whiteRightRookMoved = state.whiteRightRookMoved;

	game.blackLeftRookMoved = state.blackLeftRookMoved;
	game.blackRightRookMoved = state.blackRightRookMoved;

	game.lastMove = state.lastMove;
	game.promotion = state.promotion;
	game.moveHistory = state.moveHistory.map(move => ({
		...move,
		from: [...move.from],
		to: [...move.to]
	}));

	game.selected = null;
	game.selectedSquare = null;

	renderBoard();
}
