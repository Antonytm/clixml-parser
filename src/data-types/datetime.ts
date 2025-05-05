import { convertGeneric } from "./generic.js";

export function convertDateTime(input: any, property: string): any {
    return convertGeneric(input, property);
}