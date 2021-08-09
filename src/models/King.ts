import { Color } from "../types/Color";
import Move from "./Move";
import Piece from "./Piece";

class King extends Piece {
    constructor(color: Color) {
        const moves: Move[] = [
            new Move(-1, -1),
            new Move(0, -1),
            new Move(1, -1),
            new Move(1, 0),
            new Move(1, 1),
            new Move(0, 1),
            new Move(-1, 1),
            new Move(-1, 0)
        ];
        super("King", moves, 0, color);
    }
}

export default King;