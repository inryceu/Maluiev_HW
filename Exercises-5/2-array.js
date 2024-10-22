'use strict';

const array = () => {
    const arr = [];

    const get = (i) => 
    {
        if(arr.length - 1 >= i) return arr[i];
        else throw new Error("Index out of range");
    };

    get.push = (x) => arr.push(x);

    get.pop = () => arr.pop();

    return get;
  };

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

try {
    console.log(arr(0)); // Выводит: first
    console.log(arr(1)); // Выводит: second
    console.log(arr(2)); // Выводит: third
    
    console.log(arr(3)); // помилка
} catch(e) {console.log(e)} 

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined