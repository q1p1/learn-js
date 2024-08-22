//Template Literals
let m = "Meshari";
let j = "js ";
let markup = `
<dev> 
<h1> hi im ${m} <h1/> 
<h2> im learning ${j} <h2/>
<dev/>
document.write(markup);
`;

//If we are using the old version of JavaScript, the code will appear like this
/*
let m = "Mesaei ";
let j = "js";
let markup = "\n<dev> \n<h1> hi im ".concat(m, " <h1/> \n<h2> im learnig ").concat(j, "<h2/>\n<dev/>\n");
 */
