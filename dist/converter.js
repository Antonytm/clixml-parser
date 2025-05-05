import { XMLParser } from "fast-xml-parser";
export function convertObject(input) {
    return input;
}
export function convertXmlString(input) {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        parseAttributeValue: true,
        parseTagValue: true,
    });
    const jsonData = parser.parse(input);
    return convertObject(jsonData);
}
//# sourceMappingURL=converter.js.map