import { XMLParser } from "fast-xml-parser";

export { convertObject } from "./converter.js";

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    parseAttributeValue: true,
    parseTagValue: true,
});

const parseObject = parser.parse;
export { parseObject };