import { convertObject } from "./converter.js";

export function convertDictionary(input: any): any {
    const output: { [key: string]: any } = {};
    for (const key in input) {
        // It doens't looks OK from the logic point of vies, but it is OK from the data point of view.
        // DCT has a properties that are arrays of objects with duplicated keys.
        if (Array.isArray(input[key])) {
            let mergedObject: any[] = [];
            input[key].forEach((item: any) => {
                mergedObject.push(convertObject(item));
            });
            output[key] = mergedObject;
            continue;
        }

        output[key] = convertObject(input[key]);

    }
    return output;
}