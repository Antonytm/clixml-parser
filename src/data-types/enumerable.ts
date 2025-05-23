import { convertObject } from "../converter.js";

export function convertEnumerable(input: any): any {
    const output: any[] = [];

    for (const key1 in input) {
        if (key1 === "LST"
            || key1 === "IE"
            || key1 === "STK"
            || key1 === "QUE"
        ) {
            if (input[key1] === undefined) {
                continue;
            }

            if (typeof input[key1] === "object" && input[key1] !== null) {
                for (const key2 in input[key1]) {
                    if (typeof input[key1][key2] === "string") {
                        //LST or IE are empty strings
                        if (input[key1][key2] === "") {
                            continue;
                        }
                        output.push(input[key1][key2]);
                    } else if (typeof input[key1][key2] === "number"
                        || typeof input[key1][key2] === "boolean") {
                        output.push(input[key1][key2]);
                    } else if (typeof input[key1][key2] === "object") {
                        const objs = convertObjectSeparately(input[key1][key2]);
                        output.push(...objs);
                    }
                    else if (Array.isArray(input[key1][key2])) {
                        input[key1][key2].forEach((item: any) => {
                            const objs = convertObjectSeparately(item);
                            output.push(...objs);
                        });
                    }
                }
            }
        }
    }

    return output;
}

function convertObjectSeparately(input: any): any {
    const output: any[] = [];

    if (Array.isArray(input) && input.length > 0 &&
        (typeof input[0] === "string" || typeof input[0] === "number" || typeof input[0] === "boolean")) {
        input.forEach((item: any) => {
            output.push(item);
        });
        return output;
    }

    if (Array.isArray(input) && input.length > 0) {
        for (const item in input) {
            output.push(convertObject(input[item]));
        }
    } else if (typeof input === "object" && input !== null) {
        output.push(convertObject(input));
    }

    return output;
}