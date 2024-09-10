function Myinfo(
  UsarName = "unknown",
  age = "unknown",
  citi = "unknown",
  show = "yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h1> hi ${UsarName} , you age is ${age} </h1>`);
  document.write(`<h1> you live in ${citi}</h1>`);
  if (show === "yse") document.write(`<p> skills : ${skills.join(" | ")} </p>`);
  document.write(`</div>`);
}
Myinfo("Meshari ", 23, "tuu ", "yse", "html ", "css ");
