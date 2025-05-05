export function convertBooleanProperty(input, property) {
    const output = {};
    if (input[property] && Array.isArray(input[property])) {
        input[property].forEach((item) => {
            if (item["#text"] !== undefined) {
                output[item["@_N"]] = item["#text"] === "true";
            }
            else {
                output[item["@_N"]] = item["@_N"] === "true";
            }
        });
    }
    else if (input[property] && typeof input[property] === "object") {
        const item = input[property];
        if (item["#text"] !== undefined) {
            output[item["@_N"]] = item["#text"] === "true";
        }
        else {
            output[item["@_N"]] = item["@_N"] === "true";
        }
    }
    return output;
}
//# sourceMappingURL=boolean.js.map