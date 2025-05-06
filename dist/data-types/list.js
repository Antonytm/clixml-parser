import { convertObject } from "../converter.js";
export function convertList(input) {
    console.log("List input", input);
    const output = [];
    for (const key1 in input) {
        if (key1 === "LST"
            || key1 === "IE"
            || key1 === "STK"
            || key1 === "QUE") {
            if (input[key1] === undefined) {
                continue;
            }
            if (typeof input[key1] === "object" && input[key1] !== null) {
                for (const key2 in input[key1]) {
                    if (typeof input[key1][key2] === "string") {
                        //LST or IE are empty strings
                        continue;
                    }
                    else if (typeof input[key1][key2] === "object") {
                        const objs = convertObjectSeparately(input[key1][key2]);
                        output.push(...objs);
                    }
                    else if (Array.isArray(input[key1][key2])) {
                        input[key1][key2].forEach((item) => {
                            const objs = convertObjectSeparately(item);
                            output.push(...objs);
                        });
                    }
                }
            }
        }
    }
    console.log("List output", output);
    return output;
}
function convertObjectSeparately(input) {
    const output = [];
    if (input === undefined || input === null || typeof input === "string") {
        return output;
    }
    for (const item in input) {
        output.push(convertObject(input[item]));
    }
    return output;
}
//# sourceMappingURL=list.js.map