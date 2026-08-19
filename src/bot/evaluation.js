export function evaluateBoard(board, color) {

	const value = {
		p: -1,
		n: -3,
		b: -3,
		q: -9,
		r: -5,
		k: -100,

		P: 1,
		N: 3,
		B: 3,
		Q: 9,
		R: 5,
		K: 100
	};

	let score = 0;

	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {

			const piece = board[row][col];

			if (piece === "") continue;

			console.log("PIECE:", JSON.stringify(piece), "VALUE:", value[piece]);

			score += value[piece];
		}
	}


	if (color === "black") {
		score = -score
	}

	return score
}
