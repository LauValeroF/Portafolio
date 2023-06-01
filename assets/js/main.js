/*==================== MENU SHOW & HIDDEN ====================*/
/* Variables */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLinks = document.querySelectorAll('.nav_link')

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

/* Removes the menu everytime we click on any of the menu links */

const closeMenu = () =>{
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(link => link.addEventListener('click',closeMenu))