export function findKing(board, isWhite) {
	const king = isWhite ? "K" : "k";

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col]

			if (king === piece) return ([row, col]);
		}
	}
}
