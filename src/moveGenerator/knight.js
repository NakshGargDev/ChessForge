export function knightMoves(board, row, col) {

	const moves = []

	const offsets = [
		[-2, -1],
		[-2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1]
	];

	const piece = board[row][col];

	if (piece.toLowerCase() === "n") {

		for (const [offSetRow, offSetCol] of offsets) {
			const newRow = row + offSetRow;
			const newCol = col + offSetCol;

			if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
				const target = board[newRow][newCol];

				if (target === "") {
					moves.push([newRow, newCol])
				}
				else if (piece === piece.toUpperCase() && target === target.toLowerCase()) {
					moves.push([newRow, newCol])
				}
				else if (piece === piece.toLowerCase() && target === target.toUpperCase()) {
					moves.push([newRow, newCol])
				}
			};

		};
	}

	return moves
}
