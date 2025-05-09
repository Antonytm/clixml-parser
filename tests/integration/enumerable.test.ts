import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("inumerable: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert enumerable strings array to proper JSON", () => {
        const input = {
            "Obj": {
                "IE": {
                    "S": [
                        "1",
                        "2",
                        "3",
                    ],
                }
            }
        };

        const expected = {
            "Obj": [
                "1",
                "2",
                "3",
            ]
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });


    it("should convert enumerable strings array with name to proper JSON", () => {
        const input = {
            "Obj": {
                "IE": {
                    "S": [
                        "1",
                        "2",
                        "3",
                    ],
                },
                "@_N": "Test"
            }
        };

        const expected = {
            "Test": [
                "1",
                "2",
                "3",
            ]
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert enumerable objects with string properties to proper JSON", () => {
        const input = {
            "Obj": {
                "IE": {
                    "Obj": {
                        "ToString": "Test2",
                    }
                },

                "@_N": "Test"
            }
        };

        const expected = {
            "Test": [
                {
                    "ToString": "Test2",
                }
            ]
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert enumerable objects with string properties to proper JSON", () => {
        const input = {
            "Obj": {
                "IE": {
                    "Obj": {
                        "ToString": "Test2",
                        "Aa": "BbBb"
                    }
                },

                "@_N": "Test"
            }
        };

        const expected = {
            "Test": [
                {
                    "ToString": "Test2",
                    "Aa": "BbBb"
                }
            ]
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});