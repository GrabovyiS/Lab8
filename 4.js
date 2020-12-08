let t;
function sorting (num1,num2,num3){
  let sortArr = [num1,num2,num3];
  if (sortArr[2] < sortArr[1]){
    t = sortArr[2];
    sortArr[2] = sortArr[1];
    sortArr[1] = t;
  }
  if (sortArr[1] < sortArr[0]){
    t = sortArr[1];
    sortArr[1] = sortArr[0];
    sortArr[0] = t;
  }
  console.log(sortArr);
}
sorting(0,-3,1);
