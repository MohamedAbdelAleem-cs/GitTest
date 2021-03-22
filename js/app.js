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

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const nav=document.querySelector('#navbar__list');
const sections=document.querySelectorAll('body section');
const secFrag=document.createDocumentFragment();
//this is used to build the navigation menu
for(var i=0;i<sections.length;i++){
    const newItem=document.createElement('li');
    const newlink=document.createElement('a');
    const secNo=sections[i].getAttribute('data-nav');
    newlink.innerText=secNo;
    const j=i;
    //this addEventListener scrolls to the section when the link is clicked
    newlink.addEventListener("click", function (){
        sections[j].scrollIntoView({behavior: "smooth"});
    });
    newItem.appendChild(newlink);
    secFrag.appendChild(newItem);
}
nav.appendChild(secFrag);


// Add class 'active' to section when near top of viewport
const links=document.querySelectorAll('nav a');
//when a section is scrolled to or exists in the viewpoint the corresponding section in the nav sets to active
window.addEventListener("scroll",function(){
   for(var i=0;i<sections.length;i++){
       const pos=sections[i].getBoundingClientRect();
       if(pos.top>=-100&&pos.bottom<=1000){
           links[i].className="active";
       }
       else
       {
           links[i].className="notActive";
       }
   } 
});
//this is used when the menu bar is clicked it calls the navigation menu
const menu=document.querySelector(".menu-toggle");
const navS=document.querySelector("nav");
menu.addEventListener("click", function(){
    if(navS.className==="navbar__menu"){
        navS.className="activeN";
    }
    else{
        navS.className="navbar__menu";
    }
});







