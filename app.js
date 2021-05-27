let toggleMode = document.querySelector(".toggleMode");
let body = document.querySelector("body");

toggleMode.onclick = function () {
  console.log("fine this here 1");
  toggleMode.classList.toggle("active");
  body.classList.toggle("dark");
};

console.log("code success");
