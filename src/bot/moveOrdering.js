export function scoreMove(board, move) {
	const [fromRow, fromCol] = move.from;
	const [toRow, toCol] = move.to;

	const movingPiece = board[fromRow][fromCol];
	const capturedPiece = board[toRow][toCol];

	let score = 0;

	// Capture
	if (capturedPiece !== "") {
		score += 10;
	}

	// Pawn promotion
	if (movingPiece === "P" && toRow === 0) {
		score += 20;
	}

	if (movingPiece === "p" && toRow === 7) {
		score += 20;
	}

	return score;
}

export function orderMoves(board, moves) {
	return moves.map(move => ({
		move,
		score: scoreMove(board, move)
	})).sort((a, b) => b.score - a.score).map(item => item.move);
}
