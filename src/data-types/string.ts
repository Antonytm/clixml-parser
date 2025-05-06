import { convertGeneric } from "./generic.js";

export function convertString(input: any, property: string): any {
    const output: any = {};
    if (input[property] && typeof input[property] === "string") {
        output[input["@_N"]] = input["S"];
        return output;
    }
    return convertGeneric(input, property);
}