// Nested Object
let user = {
  Name: "meshari",
  age: 23,
  skills: ["html", "css", "js "],
  available: true,
  address: {
    Ksa: "Riyadh",
  },
  check: function () {
    if (user.available != false) {
      return user.skills.join(" | ");
    } else {
      return ` No available  `;
    }
  },
};
console.log(user.check());
console.log(user.address.Ksa);
