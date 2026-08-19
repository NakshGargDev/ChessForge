export function makeTemporaryMove(board, move) {

	const boardCopy = board.map(row => [...row]);

	const [fromRow, fromCol] = move.from;
	const [toRow, toCol] = move.to;

	const piece = boardCopy[fromRow][fromCol];

	boardCopy[fromRow][fromCol] = "";
	boardCopy[toRow][toCol] = piece;

	return boardCopy;
}
