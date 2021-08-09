import { Color } from "../types/Color";
import Move from "./Move";
import Piece from "./Piece";

class Bishop extends Piece {
    constructor(color: Color) {
        const moves: Move[] = [new Move(-20, -20)];
        super("Bishop", moves, 3, color);
    }
}

export default Bishop;