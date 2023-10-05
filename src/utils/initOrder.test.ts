import { describe, it, expect } from 'vitest'
import initOrder from './initOrder'

describe("initOrder()", () => {
    it("returns an array of sequential integers from 0 to 4", () => {
        expect(initOrder(5)).toEqual([0, 1, 2, 3, 4]);
    });
});