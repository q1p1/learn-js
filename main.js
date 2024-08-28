let product = ["keyboard", "pen", "ipad", "iphone"];
let colors = ["red", "black", "blue"];
let show = product.length;
document.write(`<h1>show ${show} product</h1> `);
for (let i = 0; i < show; i++) {
  document.write(`<div>`);
  document.write(`<h3> ${i + 1} - ${product[i]}</h3>`);
  document.write(`</div>`);
  for (let m = 0; m < colors.length; m++) {
    document.write(`<p> color :\n ${colors[m]}</p>`);
  }
}
