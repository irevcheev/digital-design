"use strict";

// пустой массив
let emptyArr = [];

// случайное число
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// заполняем рандомные числа в пустой массив
 function fillArray(){
  for (let i = 0; i < 100; i++) {
    emptyArr.push(randomInteger(-100, 100));
  }
  console.log(emptyArr);
};

fillArray();

// заменяем все отрицательные числа нулем;
function replaceFromArray() {
  for (let i = 0; i < emptyArr.length; i++) {
    if (emptyArr[i] <= 0) {
      emptyArr[i] = 0;
    }
  }
};
replaceFromArray();
console.log(emptyArr);

// четный индекс равен 0;
function evenNumber()  {
  for (let i = 0; i < emptyArr.length; i++) {
    if (emptyArr[i] === 0) {
      if (i % 2 !== 0) {
        emptyArr[i] = emptyArr[i];
      } else {
        emptyArr[i + 1] = -1;
      }
    }
  }
  return emptyArr;
};

console.log(evenNumber());



