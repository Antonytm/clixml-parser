import { convertObject } from "../converter.js";

export function convertList(input: any): any {
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
                        continue;
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
    if (input === undefined
        || input === null
        || typeof input === "string") {
        output.push(input);
        return output;
    }
    for (const item in input) {
        if (typeof (input[item]) === "string") {
            output.push({ [item]: input[item] });
            continue;
        }
        output.push(convertObject(input[item]));
    }
    return output;
}