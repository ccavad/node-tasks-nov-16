let arr = [15, 19, 23, 12, 4, 2, 49, 25, 1, -20, 103, -59, 13];

// 1)butun musbet ededleri qaytaran yeni array yarat
const filtered1 = arr.filter((el) => el > 0);
console.log("filtered1", filtered1);

// 2)butun menfi ededleri qaytaran yeni array yarat
const filtered2 = arr.filter((el) => el < 0);
console.log("filtered2", filtered2);

// 3)20-den boyuk olan butun ededleri qaytaran yeni bir arrray yarat
const filtered3 = arr.filter((el) => el > 20);
console.log("filtered3", filtered3);

// 4)20-den boyuk olan ededleri tap ve her birini 100-e vur
const filtered4 = arr.filter((el) => el > 20).map((el) => el * 100);
console.log("filtered4", filtered4);

let arr2 = ["java", "summer", "spring", "adelel", "fero", "imi", "ibo"];
// 5)length-i 6-ya beraber olan deyisenleri tap ve yeni bir array yarat
const filtered5 = arr2.filter((el) => el.length === 6);
console.log("filtered5", filtered5);

let arr3 = [
  { name: "Feramiz", age: 20, isMarried: false, id: 1 },
  { name: "Mahmud", age: 24, isMarried: true, id: 2 },
  { name: "Adil", age: 32, isMarried: true, id: 3 },
  { name: "Imran", age: 29, isMarried: false, id: 4 },
  { name: "Ibrahim", age: 19, isMarried: false, id: 5 },
];
// 6) evlilik statusu false olanlar qaytaran yeni array yarat
const filtered6 = arr3.filter((el) => !el.isMarried);
console.log("filtered6", filtered6);

// 7) evlilik statusu false olanlari ekrana cixart(li teqleri vasitesile)
// filtered6.forEach((el) => (document.body.innerHTML += `<li>${el}</li>`));

// 8)evlilik statuslari false olanlari tap ve hamisinin evlilik statuslarini true-ya cevir
const filtered7 = arr3
  .filter((el) => !el.isMarried)
  .map((el) => ({
    ...el,
    isMarried: true,
  }));

console.log("filtered7", filtered7);
