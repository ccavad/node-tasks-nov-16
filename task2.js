let arr = [4, 48, 13, 53, -29, 103];

// 1. Her bir elementi iki misli olan yeni bir array yarat
let mappedArr1 = arr.map((el) => el * 2);
console.log("mappedArr1", mappedArr1);

// 2. Her bir elementi 100 ile toplayib yeni bir array yarat
let mappedArr2 = arr.map((el) => el + 100);
console.log("mappedArr2", mappedArr2);

let arr2 = ["apple", "banana", "orange", "fexreddin", "niyameddin"];

// 1. arrayin her bir deyiseninin ilk herfini ozunde saxlayan yeni bir array yarat. Output:["a","b","o","f","n"]
let mappedArr3 = arr2.map((el) => el.at(0));
console.log("mappedArr3", mappedArr3);

// 2. ele bir yeni array qaytarki, ayri-ayri arraylerin icerisinde birinci deyisen hemin arrayin elemntinin butun herfleri boyuk olsun ve ikinci deyisen ise hemin deyisenlerin length-lerini gostersin. Numune output:
// [
//   ["APPLE", 5],
//   ["BANANA", 6],
//   ["ORANGE", 6],
//   ["FEXREDDIN", 9],
//   ["NIYAMEDDIN", 10],
// ];
let mappedArr4 = arr2.map((el) => [el?.toUpperCase(), el?.length]);
console.log("mappedArr4", mappedArr4);

let arr3 = [
  ["flag", "dance", 48],
  [23, 45, 6, 78, 54, 23, 1, 9, 10, "azerbaijani"],
  [true, "boolean", "turkish"],
  ["adele", "fero", "imi", "ibo", 100],
  ["java", "summer", "spring"],
];
// arrayinin icindeki deyisenlerin uzunlugunu qaytaran yeni bir array yarat. Output:
let mappedArr5 = arr3.map((el) => el.length);
console.log("mappedArr5", mappedArr5);
