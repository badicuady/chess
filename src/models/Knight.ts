import { Color } from "../types/Color";
import Move from "./Move";
import Piece from "./Piece";

class Knight extends Piece {
    constructor(color: Color) {
        const moves: Move[] = [
            new Move(-1, -2),
            new Move(-2, -1),
            new Move(-2, 1),
            new Move(-1, 2),
            new Move(1, 2),
            new Move(2, 1),
            new Move(-1, 2),
            new Move(-2, 1),
        ];
        super("Knight", moves, 3, color);
    }
}

export default Knight;