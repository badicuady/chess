import { Color } from 'types/Color';
import Piece from '../models/Piece';
import Pawn from '../models/Pawn';
import Bishop from '../models/Bishop';
import Knight from '../models/Knight';
import Rook from '../models/Rook';
import Queen from '../models/Queen';
import King from '../models/King';

class Board {
    private _cells: Array<Array<Piece | null>> = [
        [
            new Rook(1), new Knight(1), new Bishop(1), new Queen(1), new King(1), new Bishop(1), new Knight(1), new Rook(1)
        ],
        [
            new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1)
        ],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [
            new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0)
        ],
        [
            new Rook(0), new Knight(0), new Bishop(0), new Queen(0), new King(0), new Bishop(0), new Knight(0), new Rook(0)
        ]
    ];

    private _toMove: Color = 0;

    public get Cells(): Array<Array<Piece | null>> {
        return this._cells;
    }

    public Play(): void {

    }
}

export default Board;