const user = {
  name: "meshari",
  age: 23,
  title: "dev",
  city: "TUU",
  skills: {
    html: "yes",
    css: "css",
    react: "react",
    json: "json",
  },
};
function showDetails(obj) {
  console.log(`Your Name is : ${obj.name}`);
  console.log(`Your Age is : ${obj.age}`);
  console.log(`You have a skilles ${obj.skills.json}`);
}
showDetails(user);

function showDetails1({ name, age, skills: { css: cc, json, react } } = user) {
  console.log(`Your Name is : ${name}`);
  console.log(`Your Age is : ${age}`);

  const selectedSkills = [cc, json, react].join(" | ");
  console.log(`You have skills: ${selectedSkills}`);
}
showDetails1(user);
