import { convertGeneric } from "./generic.js";

export function convertInteger(input: any, property: string): any {
    return convertGeneric(input, property);
}