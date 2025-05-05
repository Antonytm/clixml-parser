import { XMLParser } from "fast-xml-parser";
import { convertString } from "./data-types/string.js";
import { convertBoolean } from "./data-types/boolean.js";
import { convertInteger } from "./data-types/integer.js";
import { convertDecimal } from "./data-types/decimal.js";

export function convertObject(input: any): any {

    let output: any = {};

    if (input["Objs"] && typeof input["Objs"] === "object") {
        //ignore top level object
        const objects = input["Objs"];
        return convertObject(objects);
    }

    if(input["S"] && typeof input["S"] === "string") {
        output = { ...output, ...convertString(input, "S") };
        return output;
    }

``
    for (const property in input) {
        console.log(`${property}: ${input[property]}`);
        if (property === "S" 
            || property === "DT"
            || property === "TS"
            || property === "G"
            || property === "URI"
            || property === "ToString"
            || property === "Version") {
            const propertyValue = convertString(input, property);
            output = { ...output, ...propertyValue };
        } else if (property === "B") {
            const propertyValue = convertBoolean(input, property);
            output = { ...output, ...propertyValue };
        } else if (property === "I16" || property === "I32" || property === "I64"
            || property === "U16" || property === "U32" || property === "U64"
            || property === "By" || property === "SB"
        ) {
            const propertyValue = convertInteger(input, property);
            output = { ...output, ...propertyValue };
        } else if (property === "D" || property === "Db" || property === "Sg") {
            const propertyValue = convertDecimal(input, property);
            output = { ...output, ...propertyValue };
        } else {
            output[property] = input[property];
        }
    }

    return output;
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