const user = {
  name: "meshari",
  age: 23,
  title: "dev",
  city: "TUU",
  skills: ["html", "css", "js", "react"],
  address: {
    ksa: "Riyadh",
    neighborhood: {
      nameONE: "AL-hmra'a",
      nameTOW: "alnhdaa",
    },
  },
};

let {
  name,
  age,
  skills: [, , , o],
  address: {
    ksa,
    neighborhood: { nameONE },
  },
} = user;
console.log(
  `name: ${name}, age: ${age}, skills: ${o} , address: ${ksa}, neighborhood ${nameONE}`
);
