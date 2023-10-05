import { describe, it, expect } from 'vitest'
import createHistoryText from './createHistoryText'
import { Direction } from "@/types";


describe("createHistoryText()", () => {
    it("creates correct history note when moving up", () => {
        expect(createHistoryText(1, 2, Direction.Up)).toEqual('Moved post 3 from index 1 to 0');
    });
    it("creates correct history note when moving down", () => {
        expect(createHistoryText(3, 1, Direction.Down)).toEqual('Moved post 2 from index 3 to 4');
    });
});