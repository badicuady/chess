import { Advance } from '../types/Advance';
class Move {
    constructor(x: Advance, y: Advance) {
        this._x = x;
        this._y = y;
    }

    private _x: Advance;
    private _y: Advance;

    public get X(): Advance {
        return this._x;
    }

    public get Y(): Advance {
        return this._y;
    }
}

export default Move;