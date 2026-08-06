export function slidingPiece(board, row, col, directions) {

	const moves = [];

	const piece = board[row][col];

	for (const [dirRow, dirCol] of directions) {

		let newRow = row + dirRow;
		let newCol = col + dirCol;

		while (
			newRow >= 0 && newRow < 8 &&
			newCol >= 0 && newCol < 8
		) {

			const target = board[newRow][newCol];

			if (target === "") {
				moves.push([newRow, newCol]);

				newRow += dirRow;
				newCol += dirCol;

				continue
			} else if (
				piece === piece.toUpperCase()
					? target === target.toLowerCase()
					: target === target.toUpperCase()
			) {
				moves.push([newRow, newCol]);
				break;
			} else {
				break;
			}

		}
	}

	return moves;
}
