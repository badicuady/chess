import { Color } from "types/Color";
import Move from "./Move";
import Piece from "./Piece";

class Pawn extends Piece {
    constructor(color: Color) {
        const moves: Move[] = [new Move(0, 1)];
        super('Pawn', moves, 1, color);
    }
}

export default Pawn;