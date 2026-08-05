import { game } from "../game";

export function selectPiece(piece, square, row, col) {

    if (game.selected) {

        if (game.selected[0] === row && game.selected[1] === col) {

            game.selected = null;
            game.selectedSquare = null;

            square.classList.remove("selected");

            return false;

        }


        if (piece === "") {
            return true;
        }


        game.selectedSquare.classList.remove("selected");

        game.selected = [row, col];
        game.selectedSquare = square;

        square.classList.add("selected");

        return false;

    }


    if (piece !== "") {

        game.selected = [row, col];
        game.selectedSquare = square;

        square.classList.add("selected");

    }

    return false;

}
