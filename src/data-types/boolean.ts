import { convertGeneric } from "./generic.js";

export function convertBoolean(input: any, property: string): any {
    return convertGeneric(input, property);
}