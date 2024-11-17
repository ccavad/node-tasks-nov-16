let arr = ["java", "summer", "spring", "adelel", "fero", "imi", "ibo"];

// 1. java" deyisenini tap
console.log(arr.find((el) => el === "java"));

// 2. length-i 6-ya beraber olan deyiseni tap

let arr2 = [
  { name: "Feramiz", age: 20, isMarried: false, id: 1 },
  { name: "Mahmud", age: 24, isMarried: true, id: 2 },
  { name: "Adil", age: 32, isMarried: true, id: 3 },
  { name: "Imran", age: 29, isMarried: false, id: 4 },
  { name: "Ibrahim", age: 19, isMarried: false, id: 5 },
];

console.log(arr2.find((el) => el?.name?.length === 6));

// 3. Arrayin Ibrahim adli sexsin evlilik statusunu tapin
console.log(arr2.find((el) => el?.name === "Ibrahim")?.isMarried);

// 4. Adil adli sexsi tapib evlilik statusu true-dursa false edin, falsedursa true edin
const adil = arr2.find((el) => el?.name === "Adil");
const isAdilMarried = adil?.isMarried;
if (isAdilMarried) {
  adil.isMarried = false;
} else {
  adil.isMarried = true;
}
console.log("arr2", arr2);

// 5. Mahmud adli sexsi tapib ona yeni work adli property elave et ve deyeride "Java developer olsun"
const mahmud = arr2.find((el) => el?.name === "Mahmud");
mahmud.work = "Java developer olsun";
console.log("arr2", arr2);
