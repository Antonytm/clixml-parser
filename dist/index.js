import { XMLParser } from "fast-xml-parser";
export { convertObject } from "./converter.js";
const parseXMLString = function (xmlString) {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        parseAttributeValue: true,
        parseTagValue: true,
    });
    return parser.parse(xmlString);
};
export { parseXMLString };
//# sourceMappingURL=index.js.map