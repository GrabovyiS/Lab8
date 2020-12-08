let count = prompt('Введите число овечек');
let string = '';
for (let i = 0; i<count; i++){
  string +=(i+1 + ' овечка...');
}
console.log(string);