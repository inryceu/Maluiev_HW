'use strict';

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = (persons) => {
  const res = {};
  for (const person in persons) {
    res[person] = persons[person].died - persons[person].born;
  }
  return res;
};

console.log(ages(persons))