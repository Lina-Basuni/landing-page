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

// variable holding all navigation bar links
let navLinks = document.querySelectorAll('nav ul li a');


//add event litener for scrolling over each section and add function to add active class or remove it
window.addEventListener('scroll', event => {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop+10 &&
      section.offsetTop + section.offsetHeight > fromTop+10
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
