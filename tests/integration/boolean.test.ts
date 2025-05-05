import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("boolean: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "B": [{
                "#text": false,
                "@_N": "Empty"
            }]
        };

        const expected = {
            "Empty": false
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object XMLCLI JSON to proper JSON", () => {
        const input = {
            "B": [{
                "#text": false,
                "@_N": "Empty"
            },
            {
                "#text": true,
                "@_N": "HasChildren"
            }]
        };

        const expected = {
            "Empty": false,
            "HasChildren": true
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert three object XMLCLI JSON to proper JSON", () => {
        const input = {
            "B": [{
                "#text": false,
                "@_N": "Empty"
            },
            {
                "#text": true,
                "@_N": "HasChildren"
            },
            {
                "#text": false,
                "@_N": "HasClones"
            }]
        };

        const expected = {
            "Empty": false,
            "HasChildren": true,
            "HasClones": false
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});

describe("boolean: convert boolean object XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "B": {
                "#text": false,
                "@_N": "Empty"
            }
        };

        const expected = {
            "Empty": false
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});