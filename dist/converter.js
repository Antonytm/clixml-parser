import { XMLParser } from "fast-xml-parser";
import { convertStringProperty } from "./string";
export function convertObject(input) {
    let output = {};
    if (input["S"] && typeof input["S"] === "string") {
        output = { ...output, ...convertStringProperty(input, "S") };
        return output;
    }
    for (const property in input) {
        console.log(`${property}: ${input[property]}`);
        if (property === "S") {
            const propertyValue = convertStringProperty(input, property);
            output = { ...output, ...propertyValue };
        }
        else if (property === "B") {
        }
        else {
            output[property] = input[property];
        }
    }
    return output;
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