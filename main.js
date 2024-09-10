function colc(...numburs) {
  let result = 0;
  for (let i = 0; i < numburs.length; i++) {
    result += numburs[i];
  }
  return result;
}
console.log(colc(1, 2," Meshari"));
