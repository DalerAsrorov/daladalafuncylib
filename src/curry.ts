
export const curry = (fn, init) => {
    const next = (...args) => {
        return (...x) => {
            if (!x.length) {
                return args.reduce((accum, curr) => {
                    return fn.call(fn, accum, curr);
                }, init);
            }
            return next(...args, ...x);
        };
    };

    return next();
};