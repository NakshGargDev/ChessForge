export const pieces = {
	"r": "♜",
	"n": "♞",
	"b": "♝",
	"q": "♛",
	"k": "♚",
	"p": "♟",

	"R": "♖",
	"N": "♘",
	"B": "♗",
	"Q": "♕",
	"K": "♔",
	"P": "♙"
};

export function drawPiece(board, row, col, square) {
	const piece = board[row][col]

	if (piece !== "") {
		square.textContent = pieces[piece];
	}
}
