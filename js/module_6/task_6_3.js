// Задача 6 - 3
// filter, map
// Получи массив имен пользователей(значение свойства name) по полу(значение свойства gender).

// Используй деструктурирующее присваивание для параметра функции({ name })
// без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
// Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// Write code under this line
import { default as users } from './users.js';
const getUsersWithGender = (array, gender1) =>
  array.filter(({ gender }) => gender === gender1).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */
