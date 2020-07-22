/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

let navList = document.querySelector("#navbar__list");
let navListHtml = `
<li><a class="menu__link" href="#section1">Section 1</a></li>
<li><a class="menu__link" href="#section2">Section 2</a></li>
<li><a class="menu__link" href="#section3">Section 3</a></li>
<li><a class="menu__link" href="#section4">Section 4</a></li>

`

var createNavBar = () =>{
  navList.innerHTML = navListHtml;
}
createNavBar();
// variable holding all navigation bar links
let navLinks = document.querySelectorAll('nav ul li a');
let sections = document.querySelectorAll('section');


// document.addEventListener('DOMContentLoaded', function(){
//     // your code goes here
//     createNavBar();
// }, false);

// add event litener for scrolling over each section and add function to add active class or remove it
var changeActive = (section, link) => {
  let navLinks = document.querySelectorAll('nav ul li a');
  window.addEventListener('scroll', event => {
    let fromTop = window.scrollY;
    if (
      section.offsetTop <= fromTop+10 &&
      section.offsetTop + section.offsetHeight > fromTop+10
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  link.addEventListener('click', event => {
    console.log("Hi");
    section.scrollIntoView();
  });

};

// for loop to loop through the sections and links lists
for (var i = 0; i < sections.length; i++) {
  changeActive(sections[i], navLinks[i]);
}

// for (var i = 0; i < sections.length; i++) {
//   navLinks[i].addEventListener('click', event => {
//     sections[i].hash.scrollIntoView();
//   })
// }
