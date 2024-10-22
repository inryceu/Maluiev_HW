'use strict';

const pipe = (...fns) => 
{
    for (let fn of fns) 
    {
      if (typeof fn !== 'function') 
        throw new Error('Contains not a function');
    }
    return (res) => fns.reduce((g, f) => f(g), res);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);

console.log(f(5)) //1728