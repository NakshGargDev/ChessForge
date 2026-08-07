export function kingMoves(board, row, col) {

	const offsets = [
		[-1, -1], [-1, 0], [-1, 1],
		[0, -1], [0, 1],
		[1, -1], [1, 0], [1, 1]
	];

	const moves = [];

	const piece = board[row][col];

	for (const [offSetRow, offSetCol] of offsets) {
		const newRow = row + offSetRow;
		const newCol = col + offSetCol;

		if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
			const target = board[newRow][newCol];

			if (target === "") {
				moves.push([newRow, newCol]);
			}
			else if (piece === piece.toUpperCase() && target === target.toLowerCase()) {
				moves.push([newRow, newCol]);
			}
			else if (piece === piece.toLowerCase() && target === target.toUpperCase()) {
				moves.push([newRow, newCol]);
			};
		};
	};

	return moves;
}
