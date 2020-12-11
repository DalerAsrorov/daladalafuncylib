type BaseArray = Array<any>

export const flattenArray = (arr: BaseArray) => {
    return arr.reduce((accum: BaseArray, curr) => {
        if (Array.isArray(curr)) {
            return accum.concat(flattenArray(curr))
        }

        accum.push(curr);
        return accum;
    }, []);
}