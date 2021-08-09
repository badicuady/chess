import { Color } from '../types/Color';
import Move from './Move';

abstract class Piece {
    protected constructor(name: string, moves: Move[], value: number, color: Color) {
        this._name = name;
        this._moves = moves;
        this._value = value;
        this._color = color;
    }

    private _name: string;
    private _moves: Move[];
    private _value: number;
    private _color: Color;

    public get Name(): string {
        return this._name;
    }

    public get Moves(): Move[] {
        return this._moves;
    }

    public get Value(): number {
        return this._value;
    }

    public get Color(): Color {
        return this._color;
    }
}

export default Piece;