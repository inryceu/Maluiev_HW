'use strict';

const compose = (...fns) => {
    let handler;

    const composed = (x) => {
        if (fns.length === 0) return x;
        let res = x;

        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                if (typeof fns[i] === 'function') {
                    res = fns[i](res);
                } else {
                    throw new Error('Not a function');
                }
            }
            return res;
        } catch (error) {
            if (handler) handler(error);
            return undefined;
        }
    };

    composed.on = (name, h) => {
        if (name === 'error') handler = h;
    };

    return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);

f.on('error', (err) => {
    console.error('Error:', err.message);
});

console.log(f(5));  
console.log(f('for err'));