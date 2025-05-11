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

    it("should convert enumerable booleans array to proper JSON", () => {
        const input = {
            "Obj": {
                "IE": {
                    "B": [
                        true,
                        false,
                        true,
                    ],
                }
            }
        };

        const expected = {
            "Obj": [
                true,
                false,
                true,
            ]
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert enumerable boolean to proper JSON", () => {
        const input = {
            "Obj": {
                "LST": {
                    "B": [
                        true,
                    ],
                }
            }
        };

        const expected = {
            "Obj": [
                true,
            ]
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert enumerable boolean to proper JSON", () => {
        const input = {
            "Objs": {
              "Obj": {
                "TN": {
                  "T": [
                    "System.Collections.Generic.List`1[[System.Object, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]",
                    "System.Object"
                  ],
                  "@_RefId": 0
                },
                "LST": {
                  "B": true
                },
                "@_RefId": 0
              },
              "@_Version": "1.1.0.1",
              "@_xmlns": "http://schemas.microsoft.com/powershell/2004/04"
            }
          };

        const expected = {
            "Obj": [
                true
            ]
        };
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});