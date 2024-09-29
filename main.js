// coll back
function makeItemRed(Elements) {
  Elements.target.style.color = "red";
}
let changed = document.getElementById("hi");
changed.addEventListener("click", makeItemRed)
