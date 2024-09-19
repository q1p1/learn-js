
//Array.some 
let m = [5, 6, 7, 8, 9, 10];
function MyArry(arrye, value) {
  return arrye.some(function (element) {
    return element < value;
  });
}
console.log(MyArry(m, 4));

