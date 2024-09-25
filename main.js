// oop

function InfoUser(id, username, salary) {
  this.id = id;
  this.name = username;
  this.salary = salary;
}
let user1 = new InfoUser(1, "meshari", 2000);
let user2 = new InfoUser(2, "ahmed ", 2000);
let user3 = new InfoUser(3, "salem ", 2000);
console.log(user1.salary);

// const userOne = {
//   id: 2,
//   username: "meshari ",
//   salary: 2000,
// };
// const userTwo = {
//   id: 3,
//   username: "ahmed ",
//   salary: 2000,
// };
// const userThree = {
//   id: 4,
//   username: "salem ",
//   salary: 2000,
// };
