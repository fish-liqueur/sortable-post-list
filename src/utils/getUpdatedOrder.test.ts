import { describe, it, expect } from 'vitest'
import getUpdatedOrder from './getUpdatedOrder'
import { Direction } from "@/types";


describe("getUpdatedOrder()", () => {
    it("creates correct order when moving a post up", () => {
        expect(getUpdatedOrder(2, 2, Direction.Up, [0, 1, 2, 3, 4])).toEqual([0, 2, 1, 3, 4]);
    });
    it("creates correct order when moving a post down", () => {
        expect(getUpdatedOrder(3, 3, Direction.Down, [0, 1, 2, 3, 4])).toEqual([0, 1, 2, 4, 3]);
    });
});