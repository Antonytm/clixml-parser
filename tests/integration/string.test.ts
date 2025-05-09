import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("string: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "S": [{
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Archive date"
            }]
        };

        const expected = {
            "__Archive date": "0001-01-01T00:00:00"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object XMLCLI JSON to proper JSON", () => {
        const input = {
            "S": [{
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Archive date"
            }, {
                "#text": "Sitecore.Data.Items.ItemState",
                "@_N": "State"
            }]
        };

        const expected = {
            "__Archive date": "0001-01-01T00:00:00",
            "State": "Sitecore.Data.Items.ItemState"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert three object XMLCLI JSON to proper JSON", () => {
        const input = {
            "S": [{
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Archive date"
            }, {
                "#text": "Sitecore.Data.Items.ItemState",
                "@_N": "State"
            }, {
                "#text": "New Value",
                "@_N": "New Field"
            }]
        };

        const expected = {
            "__Archive date": "0001-01-01T00:00:00",
            "State": "Sitecore.Data.Items.ItemState",
            "New Field": "New Value"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});

describe("string: convert strings object XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON", () => {
        const input = {
            "S": {
                "#text": "0001-01-01T00:00:00",
                "@_N": "__Archive date"
            }
        };

        const expected = {
            "__Archive date": "0001-01-01T00:00:00"
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert ref object XMLCLI JSON to proper JSON", () => {
        const input = {
            "S": "{D26AF0F1-5E54-41F0-B026-C96D4D2BEEA3}",
            "@_N": "ID",
            "@_RefId": 253
        };

        const expected = {
            "ID": "{D26AF0F1-5E54-41F0-B026-C96D4D2BEEA3}"
        }
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert string array XMLCLI JSON to proper JSON", () => {
        const input = {
            "S": ["{D26AF0F1-5E54-41F0-B026-C96D4D2BEEA3", "New Value"],
        };

        const expected = {
            "0": "{D26AF0F1-5E54-41F0-B026-C96D4D2BEEA3",
            "1": "New Value",
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});