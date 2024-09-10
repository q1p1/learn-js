document.querySelector(".name").onblur = function () {
  console.log(this.value);
  window.sessionStorage.setItem("name", this.value);
};
