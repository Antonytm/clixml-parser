import { convertGeneric } from "./generic.js";
export function convertString(input, property) {
    const output = {};
    if (input[property] && typeof input[property] === "string") {
        output[input["@_N"]] = input["S"];
        return output;
    }
    return convertGeneric(input, property);
}
//# sourceMappingURL=string.js.map