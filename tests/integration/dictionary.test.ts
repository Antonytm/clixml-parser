import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("dictionary: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert dictionary to proper JSON", () => {
        const input = {
            DCT: {
                En: [
                    {
                        S: [
                            {
                                "#text": "/sitecore\\\\\\\\admin/Shell/ShowDatabaseName",
                                "@_N": "Key",
                            },
                            {
                                "#text": true,
                                "@_N": "Value",
                            },
                        ],
                    },
                    {
                        S: [
                            {
                                "#text": "WallpaperBackground",
                                "@_N": "Key",
                            },
                            {
                                "#text": "#07337C",
                                "@_N": "Value",
                            },
                        ],
                    },
                ],
            },
        };

        const expected = {
            "En": [
                {
                    "Key": "/sitecore\\\\\\\\admin/Shell/ShowDatabaseName",
                    "Value": true,
                },
                {
                    "Key": "WallpaperBackground",
                    "Value": "#07337C",
                },
            ],
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});