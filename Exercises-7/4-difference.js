'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => 
{
    let res = [];

    for(let el of array1)
    {
        if(!array2.includes(el) && !res.includes(el))
            res.push(el);
    }
    return res;
};

const array1 = [7, -2, 7, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Result: [7, -2, 5]