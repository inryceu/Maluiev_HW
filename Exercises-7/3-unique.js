'use strict';

const unique = (array) => 
{
    const res = [];

    for(let el of array)
    {
        if(!res.includes(el)) 
            res.push(el);
    }
    return res;
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Result: [2, 1, 3]