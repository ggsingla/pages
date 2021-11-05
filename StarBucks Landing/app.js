/////////////////////////////////////////////
// Dark Mode Toggle
/////////////////////////////////////////////

let toggleMode = document.querySelector('.toggleMode');
let body = document.querySelector('body');

toggleMode.onclick = function () {
  toggleMode.classList.toggle('active');
  body.classList.toggle('dark');
};

/////////////////////////////////////////////
// Responsive NavBar Code
/////////////////////////////////////////////

var burger = document.getElementById('burger-hider');
var navItems = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navItems.classList.toggle('active');
  burger.classList.toggle('active');
});
main.addEventListener('click', () => {
  if (main.classList == 'active') {
    navItems.classList.remove('active');
    burger.classList.remove('active');
    main.classList.remove('active');
  }
});