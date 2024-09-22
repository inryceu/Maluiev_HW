'use strict';

const countTypesInArray = function (arr) {
  const counter = {}

  for (let element of arr)
    counter[`${typeof element}`] 
      ? ++counter[`${typeof element}`]
      : counter[`${typeof element}`] = 1

    console.log(counter)

    return counter

    //в мене не запускається файл тесту, з умови завдання
    //не зрозумів, чи потрібно друкувати, чи повертати значення
};

const arr = [false, 1, "Hello", { a: 1, b: 2 }, [], 'a', 1.2]
countTypesInArray(arr)

module.exports = { countTypesInArray };