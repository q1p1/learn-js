// fetch API
fetch("https://api.GitHub.com/users/q1p1/repos")
  .then((result) => {
    let mydata = result.json();
    console.log(mydata);
    return mydata;
  })
  .then((mydata) => {
    for (i = 0; i < mydata.length; i++) {
      console.log(mydata[i].name);
    }
  });

