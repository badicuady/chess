import { Color } from "../types/Color";
import Move from "./Move";
import Piece from "./Piece";

class Rook extends Piece {
    constructor(color: Color) {
        const moves: Move[] = [new Move(0, -10), new Move(-10, 0)];
        super("Rook", moves, 5, color);
    }
}

export default Rook;