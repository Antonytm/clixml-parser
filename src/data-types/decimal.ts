import { convertGeneric } from "./generic.js";

export function convertDecimal(input: any, property: string): any {
    return convertGeneric(input, property);
}