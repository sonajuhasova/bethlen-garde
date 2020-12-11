/*code source: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0*/


var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".menu-btn")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links

var menuLinks = document.querySelectorAll(".nav-el")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)   