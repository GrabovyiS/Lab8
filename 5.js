let maxArr = [2, -1, 0, -5, -4];
let maximum = maxArr[0];
for (let i=1; i<5; i++){
  if (maxArr[i] > maximum){
    maximum = maxArr[i];
  }
}
console.log(maximum);