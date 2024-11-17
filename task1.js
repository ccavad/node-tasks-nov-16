let arr = [15, 49, "string", 3, 6, 62, "array", 12, 9, -4, "number", 58, 103];

// 1. Butun deyisenleri ekrana yazdirin
arr.forEach((el) => console.log(el));

// 2. Butun saylari topla ve ekrana yazdirin
let sum = 0;
arr.forEach((el) => {
  if (typeof el === "number") {
    sum += el;
  }
});

console.log("sum", sum);

// 3. Arrayin icerisindeki butun stringleri tapin, boyuk herfe cevirin ve yeni arrayi capa verin
let stringArr = [];
arr.forEach((el) => {
  if (typeof el === "string") {
    stringArr.push(el.toUpperCase());
  }
});
console.log("stringArr", stringArr);

// 4. Butun musbet ededleri tap ve ekrana yazdir
arr.forEach((el) => {
  if (typeof el === "number" && el > 0) {
    console.log(el);
  }
});

// 5. Arrayi tersine cevirib gonder
let reversedArr = [];
arr.forEach((el) => reversedArr.unshift(el));
console.log("reversedArr", reversedArr);

// 6. Butun cut ededleri ekrana yazdir
arr.forEach((el) => {
  if (typeof el === "number" && el % 2 === 0) {
    console.log(el);
  }
});

// 7. Butun stringlerin uzunlugunu tap ve "string-length" seklinde ekrana yazdir
arr.forEach((el) => {
  if (typeof el === "string") {
    console.log("string-length", el, el.length);
  }
});

// 8. Butun reqemleri iki ile vure ekrana yazdir
arr.forEach((el) => {
  if (typeof el === "number") {
    console.log(el * 2);
  }
});
