export function convertGeneric(input, property, key) {
    const output = {};
    if (input[property] && Array.isArray(input[property])) {
        input[property].forEach((item) => {
            if (item["#text"] !== undefined) {
                output[item["@_N"]] = item["#text"];
            }
            else {
                output[item["@_N"]] = item;
            }
        });
    }
    else if (input[property] && typeof input[property] === "object") {
        const item = input[property];
        if (item["#text"] !== undefined) {
            output[item["@_N"]] = item["#text"];
        }
        else {
            output[item["@_N"]] = item;
        }
    }
    else if (input[property] && typeof input[property] === "string") {
        output[input["@_N"]] = input[key];
    }
    return output;
}
//# sourceMappingURL=generic.js.map