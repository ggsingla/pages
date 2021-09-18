var navb = document.querySelector('nav');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navb.style.backgroundColor = "var(--bg-color)"
  } else {
    navb.style.backgroundColor = "transparent"
  }
}