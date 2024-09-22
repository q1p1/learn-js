// Ranges
let tld = "com Net Org Info ";
let tldRe = /(Com|Net|Org)/gi;
console.log(tld.match(tldRe));

let num = "1234567890";
let numRe = /[0-3]/g; //0-9
console.log(num.match(numRe));

let NotNum = "1@234567890";
let NotNumRe = /[^0-9]/g;
console.log(NotNum.match(NotNumRe));

let Mystr = "os1 os10 os8s os2os ";
let MystrRE = /os[5-9]s/gi;
console.log(Mystr.match(MystrRE));
