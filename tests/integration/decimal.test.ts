import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("decimal: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "D": [{
                "#text": 10.4,
                "@_N": "Count"
            }]
        };

        const expected = {
            "Count": 10.4
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object XMLCLI JSON to proper JSON", () => {
        const input = {
            "D": [{
                "#text": 10.4,
                "@_N": "Count"
            },
            {
                "#text": 20,
                "@_N": "Count2"
            }]
        };

        const expected = {
            "Count": 10.4,
            "Count2": 20
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert three object XMLCLI JSON to proper JSON", () => {
        const input = {
            "Sg": [
                {
                    "#text": 10.4,
                    "@_N": "Count"
                },
                {
                    "#text": 20.2,
                    "@_N": "Count2"
                },
                {
                    "#text": -30.2,
                    "@_N": "Count3"
                }
            ]
        };

        const expected = {
            "Count": 10.4,
            "Count2": 20.2,
            "Count3": -30.2
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});

describe("decimal: convert boolean object XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "D": {
                "#text": -10.1,
                "@_N": "Count"
            }
        };

        const expected = {
            "Count": -10.1
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object XMLCLI JSON to proper JSON", () => {
        const input = {
            "D": {
                "#text": 10.5,
                "@_N": "Count"
            },
            "U64": {
                "#text": 20,
                "@_N": "Count2"
            }
        };

        const expected = {
            "Count": 10.5,
            "Count2": 20
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});