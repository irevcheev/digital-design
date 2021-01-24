"use strict";
 function tringle(range){
  let hash = "";
  for (let i = 1; i <= range; i++) {
    for (let k =  range - i; k >= 1; k--) {
      hash += "\t";
    }
    for (let j = 1; j <= i; j++) {
      hash += "#\t\t";
    }
    console.log(hash);
    hash = "";
  }
};

tringle(5);
