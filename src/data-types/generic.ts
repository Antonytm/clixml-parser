export function convertGeneric(input: any, property: string): any {
    const output: any = {};
    if (input[property] && Array.isArray(input[property])) {

        if ((input[property] as Array<any>).length > 0
            && (typeof (input[property][0]) === "string"
                || typeof (input[property][0]) === "number"
                || typeof (input[property][0]) === "boolean")
        ) {
            const arrayOutput: any[] = [];
            (input[property] as Array<any>).forEach((item: any) => {
                arrayOutput.push(item);
            });
            return arrayOutput;
        }

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