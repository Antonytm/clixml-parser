import { XMLParser } from "fast-xml-parser";
import { convertString } from "./data-types/string.js";
import { convertBoolean } from "./data-types/boolean.js";
import { convertInteger } from "./data-types/integer.js";
import { convertDecimal } from "./data-types/decimal.js";
import { convertList } from "./data-types/list.js";
import { convertObj } from "./data-types/obj.js";
export function convertObject(input) {
    let output = {};
    if (input["Objs"] && typeof input["Objs"] === "object") {
        //ignore top level object
        const objects = input["Objs"];
        return convertObject(objects);
    }
    if (input["S"] && typeof input["S"] === "string") {
        output = { ...output, ...convertString(input, "S") };
        return output;
    }
    for (const property in input) {
        if (property === "Obj") {
            const propertyValue = convertObj(input, property);
            output = { ...output, ...propertyValue };
        }
        else if (property === "S"
            || property === "DT"
            || property === "TS"
            || property === "G"
            || property === "URI"
            || property === "ToString"
            || property === "Version"
            || property === "Nil"
            || property === "C") {
            const propertyValue = convertString(input, property);
            output = { ...output, ...propertyValue };
        }
        else if (property === "B") {
            const propertyValue = convertBoolean(input, property);
            output = { ...output, ...propertyValue };
        }
        else if (property === "I16" || property === "I32" || property === "I64"
            || property === "U16" || property === "U32" || property === "U64"
            || property === "By" || property === "SB") {
            const propertyValue = convertInteger(input, property);
            output = { ...output, ...propertyValue };
        }
        else if (property === "D" || property === "Db" || property === "Sg") {
            const propertyValue = convertDecimal(input, property);
            output = { ...output, ...propertyValue };
        }
        else if (property === "Props"
            || property === "MS") {
            // spread the properties into the output object
            const propertyValue = convertObject(input[property]);
            output = { ...output, ...propertyValue };
        }
        else if (property === "@_N"
            || property === "@_Version"
            || property === "@_xmlns"
            || property === "@_RefId") {
            // Ignore the attribute name property
            continue;
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