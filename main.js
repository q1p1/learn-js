function info(name, age) {
  if (age === undefined) {
    console.error("age!!!");
    age = "nan";
  }
  return `hi ${name} your age is ${age}`;
}
console.log(info("meshari"));
