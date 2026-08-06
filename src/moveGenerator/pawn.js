export function pawnMoves(board, row, col) {
	const moves = [];

	const piece = board[row][col];

	if (piece === "P") {
		if (board[row - 1][col] === "") {
			moves.push([row - 1, col])
		}
		if (row === 6 && board[row - 2][col] === "" && board[row - 1][col] === "") {
			moves.push([row - 2, col])
		}
	}

	if (piece === "p") {
		if (board[row + 1][col] === "") {
			moves.push([row + 1, col])
		}
		if (row === 1 && board[row + 2][col] === "" && board[row + 1][col] === "") {
			moves.push([row + 2, col])
		}
	}

	return moves
}
