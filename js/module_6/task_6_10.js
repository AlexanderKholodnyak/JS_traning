// Задача 6 - 10
// reduce, filter, sort
// Получи массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// Слияние массивов:

// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
// Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// Write code under this line
import { default as users } from './users.js';
//uniqueArray = a.filter(function(item, pos) {
// return a.indexOf(item) == pos;
// })
const getSortedUniqueSkills = array => {
  const newArray = [...array].reduce(
    (acc, { skills }) => [...acc, ...skills],
    [],
  );
  return newArray
    .filter((skill, index) => newArray.indexOf(skill) === index)
    .sort();
};
console.log(getSortedUniqueSkills(users));

/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
