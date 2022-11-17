/**
 * A class full of utilities to use in the API.
 */
export class Util {
    constructor() {
        throw new Error("This class may not be instantiated!");
    }

    // RANDOMIZERS
    static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}