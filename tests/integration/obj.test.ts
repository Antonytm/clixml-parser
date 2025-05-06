import { describe, it, expect } from "vitest";
import { convertObject } from "../../src/converter";

describe("object: convert strings array XMLCLI JSON to proper JSON", () => {
    it("should convert one object XMLCLI JSON to proper JSON without name", () => {
        const input = {
            "Obj": {
                "S": {
                    "#text": "0001-01-01T00:00:00",
                    "@_N": "__Archive date"
                }
            }
        };
        const expected = {
            "Obj": {
                "__Archive date": "0001-01-01T00:00:00"
            }
        };
        
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert one object XMLCLI JSON to proper JSON with name", () => {
        const input = {
            "Obj": {
                "S": {
                    "#text": "0001-01-01T00:00:00",
                    "@_N": "__Archive date"
                },
                "@_N": "Object1"
            }
        };
        const expected = {
            "Object1": {
                "__Archive date": "0001-01-01T00:00:00"
            }
        };
        
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert one object array XMLCLI JSON to proper JSON with name", () => {
        const input = {
            "Obj": [{
                "S": {
                    "#text": "0001-01-01T00:00:00",
                    "@_N": "__Archive date"
                },
                "@_N": "Object1"
            }]
        };
        const expected = {
            "Object1": {
                "__Archive date": "0001-01-01T00:00:00"
            }
        };
        
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert two object array XMLCLI JSON to proper JSON with name", () => {
        const input = {
                "Obj": [{
                    "S": {
                        "#text": "0001-01-01T00:00:00",
                        "@_N": "__Archive date"
                    },
                    "@_N": "Object1"
                }, {
                    "S": {
                        "#text": "0002-02-02T00:00:00",
                        "@_N": "__Another Archive date"
                    },
                    "@_N": "Object2"
                }]
        };
        const expected = {
            "Object1": {
                "__Archive date": "0001-01-01T00:00:00"
            },
            "Object2": {
                "__Another Archive date": "0002-02-02T00:00:00"
            }
        };
        
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });

    it("should convert three object array XMLCLI JSON to proper JSON with name", () => {
        const input = {
                "Obj": [{
                    "S": {
                        "#text": "0001-01-01T00:00:00",
                        "@_N": "__Archive date"
                    },
                    "@_N": "Object1"
                }, {
                    "S": {
                        "#text": "0002-02-02T00:00:00",
                        "@_N": "__Another Archive date"
                    },
                    "@_N": "Object2"
                },
                {
                    "S": {
                        "#text": "0003-03-03T00:00:00",
                        "@_N": "__Another Archive date"
                    },
                    "@_N": "Object3"
                }]
        };
        const expected = {
            "Object1": {
                "__Archive date": "0001-01-01T00:00:00"
            },
            "Object2": {
                "__Another Archive date": "0002-02-02T00:00:00"
            },
            "Object3": {
                "__Another Archive date": "0003-03-03T00:00:00"
            }
        };
        
        const result = convertObject(input);
        expect(result).toEqual(expected);
    });
});