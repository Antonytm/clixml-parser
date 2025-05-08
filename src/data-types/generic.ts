export function convertGeneric(input: any, property: string): any {
    const output: any = {};
    if (input[property] && Array.isArray(input[property])) {
        input[property].forEach((item: any) => {
            if (item["#text"] !== undefined) {
                output[item["@_N"]] = item["#text"];
            } else {
                // How to define the type of item["#text"] if it is undefined?
                output[item["@_N"]] = "";
            }
        });
    } else if (input[property] && typeof input[property] === "object") {
        const item = input[property];
        if (item["#text"] !== undefined) {
            output[item["@_N"]] = item["#text"];
        } else {
            output[item["@_N"]] = "";
        }
    }
    return output;
}