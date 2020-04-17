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


// Define Global Variables
const sectionList = document.getElementsByTagName('section');
const navbar = document.getElementById('navbar__list');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');


console.log('Navbar ' + navbar.id);

document.addEventListener('click', function(){
const navbarHeight = navbar.offsetHeight;
const screenHeight = window.innerHeight;
// console.log('Navbar Height:' + navbarHeight  + 'px');
console.log(window.innerHeight);
if(((section1.getBoundingClientRect().y + navbarHeight)>0) & ((section1.getBoundingClientRect().y + navbarHeight)<screenHeight)){
    console.log('Section1 is currently viewed');
}
else  console.log('Section1 outside of view');

if(((section2.getBoundingClientRect().y + navbarHeight)>0) & ((section2.getBoundingClientRect().y + navbarHeight)<screenHeight)){
    console.log('Section2 is currently viewed');
}
else  console.log('Section2 outside of view');

if(((section3.getBoundingClientRect().y + navbarHeight)>0) & ((section3.getBoundingClientRect().y + navbarHeight)<screenHeight)){
    console.log('Section3 is currently viewed');
}
else  console.log('Section3 outside of view');

if(((section4.getBoundingClientRect().y + navbarHeight)>0) & ((section4.getBoundingClientRect().y + navbarHeight)<screenHeight)){
    console.log('Section4 is currently viewed');
}
else  console.log('Section4 outside of view');

// console.log('Section1 Top Position: ' + section1.getBoundingClientRect().y);
// console.log('Section1 Bottom Position: ' + document.getElementById('section1').getBoundingClientRect().bottom);
// console.log('Section2 Top Position: ' + document.getElementById('section2').getBoundingClientRect().y);
// console.log('Section2 Bottom Position: ' + document.getElementById('section2').getBoundingClientRect().bottom);
// console.log('Section3 Top Position: ' + document.getElementById('section3').getBoundingClientRect().y);
// console.log('Section3 Bottom Position: ' + document.getElementById('section3').getBoundingClientRect().bottom);
// console.log('Section4 Top Position: ' + document.getElementById('section4').getBoundingClientRect().y);
// console.log('Section4 Bottom Position: ' + document.getElementById('section4').getBoundingClientRect().bottom);
});


document.getElementById('section1');
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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// const foot = document.querySelector('.page__footer');
// foot.style.backgroundColor='orange';


//spacer





for (let sec of sectionList){
    console.log('section Id ' + sec.id);
    //  Populating the "heading" constant with the Text content of the collected heading  
    const heading = sec.querySelector('h2').textContent;
    //  Debug heading content   
    console.log('heading ' + heading);
    // Creating a new list item and storeit  in the constant "item"
    const item = document.createElement('li');
    item.textContent = heading;
    navbar.appendChild(item);
    item.addEventListener('click', function(){
        sec.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } );
    
}





