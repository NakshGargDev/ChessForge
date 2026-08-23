import { knightPST } from "./PST.js";
import { pawnPST } from "./PST.js";
import { bishopPST } from "./PST.js";
import { queenPST } from "./PST.js";
import { rookPST } from "./PST.js";
import { kingPST } from "./PST.js";

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

			if (piece === "N") {
				score += knightPST[row][col];
			}

			if (piece === "n") {
				score -= knightPST[7 - row][col];
			}

			if (piece === "B") {
				score += bishopPST[row][col];
			}

			if (piece === "b") {
				score -= bishopPST[7 - row][col];
			}

			if (piece === "P") {
				score += pawnPST[row][col];
			}

			if (piece === "p") {
				score -= pawnPST[7 - row][col];
			}

			if (piece === "Q") {
				score += queenPST[row][col];
			}

			if (piece === "q") {
				score -= queenPST[7 - row][col];
			}

			if (piece === "R") {
				score += rookPST[row][col];
			}

			if (piece === "r") {
				score -= rookPST[7 - row][col];
			}

			if (piece === "K") {
				score += kingPST[row][col];
			}

			if (piece === "k") {
				score -= kingPST[7 - row][col];
			}

			score += value[piece];
		}
	}


	if (color === "black") {
		score = -score
	}

	return score
}
