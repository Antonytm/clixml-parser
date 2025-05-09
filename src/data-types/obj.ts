import { convertObject } from "../converter.js"
import { convertEnumerable } from "./enumerable.js";

export function convertObj(input: any, property: string): any {
    const output: any = {}

    if (input[property] && Array.isArray(input[property])) {
        input[property].forEach((item: any) => {
            output[item["@_N"]] = convertOneObject(item);
        });
    } else if (input[property] && typeof input[property] === "object") {
        const name = input[property]["@_N"] ?? "Obj";
        output[name] = convertOneObject(input[property]);
    }

    return output;
}

function convertOneObject(item: any){
    if (item["LST"] !== undefined
        || item["IE"] !== undefined
        || item["STK"] !== undefined
        || item["QUE"] !== undefined
    ) {
        //this object is a collection of objects
        return convertEnumerable(item);
    } else {
        return convertObject(item);
    }
}