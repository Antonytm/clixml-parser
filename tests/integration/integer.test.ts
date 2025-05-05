import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("interger: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "I16": [{
                "#text": 10,
                "@_N": "Count"
            }]
        };

        const expected = {
            "Count": 10
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object XMLCLI JSON to proper JSON", () => {
        const input = {
            "I32": [{
                "#text": 10,
                "@_N": "Count"
            },
            {
                "#text": 20,
                "@_N": "Count2"
            }]
        };

        const expected = {
            "Count": 10,
            "Count2": 20
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert three object XMLCLI JSON to proper JSON", () => {
        const input = {
            "I64": [
                {
                    "#text": 10,
                    "@_N": "Count"
                },
                {
                    "#text": 20,
                    "@_N": "Count2"
                },
                {
                    "#text": -30,
                    "@_N": "Count3"
                }
            ]
        };

        const expected = {
            "Count": 10,
            "Count2": 20,
            "Count3": -30
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});

describe("integer: convert boolean object XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "U16": {
                "#text": 10,
                "@_N": "Count"
            }
        };

        const expected = {
            "Count": 10
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object XMLCLI JSON to proper JSON", () => {
        const input = {
            "U32": {
                "#text": 10,
                "@_N": "Count"
            },
            "U64": {
                "#text": 20,
                "@_N": "Count2"
            }
        };

        const expected = {
            "Count": 10,
            "Count2": 20
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});