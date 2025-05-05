import { XMLParser } from "fast-xml-parser";

export function convertObject(input: any): any {
    return input;
}

export function convertXmlString(input: string): any {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      parseAttributeValue: true,
      parseTagValue: true,
    });
    
    const jsonData = parser.parse(input);
    return convertObject(jsonData);
}