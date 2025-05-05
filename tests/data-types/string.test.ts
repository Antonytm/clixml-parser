import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("convert XMLCLI JSON to proper JSON", () => {
    it("should convert XMLCLI JSON to proper JSON", () => {
        const input = {
            "#text": "0001-01-01T00:00:00",
            "@_N": "__Archive date"
        };
    
        const expected = {
            "__Archive date": "0001-01-01T00:00:00"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});