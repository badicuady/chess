import { Color } from "../types/Color";
import Move from "./Move";
import Piece from "./Piece";

class Queen extends Piece {
    constructor(color: Color) {
        const moves: Move[] = [new Move(-30, -30)];
        super("Queen", moves, 9, color);
    }
}

export default Queen;