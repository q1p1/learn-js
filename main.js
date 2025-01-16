
// get API 
let MyRequest = new XMLHttpRequest();
MyRequest.open("GET", "https://api.github.com/users/q1p1/repos");
MyRequest.send();
MyRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    for (let i = 0; i < repos.length; i++) {
      let div = document.createElement("div");
      let reposName = document.createTextNode(repos[i].full_name);
      div.appendChild(reposName);
      document.body.appendChild(div);
    }
  }
};
