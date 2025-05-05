import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("datetime: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "DT": [{
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Valid from"
            }]
        };

        const expected = {
            "__Valid from": "0001-01-01T00:00:00"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object XMLCLI JSON to proper JSON", () => {
        const input = {
            "DT": [{
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Valid from"
            },
            {
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Valid to"
            }]
        };

        const expected = {
            "__Valid from": "0001-01-01T00:00:00",
            "__Valid to": "0001-01-01T00:00:00"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert three object XMLCLI JSON to proper JSON", () => {
        const input = {
            "DT": [{
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Valid from"
            },
            {
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Valid to"
            },
            {
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Publish"
            }]
        };

        const expected = {
            "__Valid from": "0001-01-01T00:00:00",
            "__Valid to": "0001-01-01T00:00:00",
            "__Publish": "0001-01-01T00:00:00"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});

describe("boolean: convert boolean object XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "DT": {
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Publish"
            }
        };

        const expected = {
            "__Publish": "0001-01-01T00:00:00"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});