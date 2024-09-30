const mypromes = new Promise((resolve, reject) => {
  let Employee = ["meshari", "mhamed", "salem", "khaild"];
  if (Employee.length === 4) {
    resolve(Employee);
  } else {
    reject(Error("Employee is not for "));
  }
});
mypromes.then((resolve) => {
  resolve.length = 2;
  console.log(resolve);
});
mypromes
  .then((reject) => {
    reject.length = 1;
    console.log(reject);
  })
  .catch((reject) => console.log(reject)).finally(console.log("done"))
