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
console.log('Navbar ' + navbar.id);

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
    // function scrollToTarget(){
    //     sec.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    // };
    console.log('section Id ' + sec.id);
    const heading = sec.querySelector('h2').textContent;
    console.log('heading ' + heading);
    const item = document.createElement('li');
    // item.innerHTML = "<a href='#'>"+heading+"</a>";
    // item.textContent = heading;
    // item.innerHTML = "<a href='#"+sec.id+"'>"+heading+"</a>";
    item.textContent = heading;
    // item.addEventListener('click', scrollToTarget());
    navbar.appendChild(item);
    item.addEventListener('click', function(){
        sec.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } );
    
}

// const child = document.getElementById('navbar__list').firstChild;
// child.textContent;
// child.child

// const listLi = navbar.getElementsByTagName('li');
// console.log(listLi[0].innerText);
// function lorem(){};
// function testFunc(){
//     listLi[0].style.color = 'red';
// };
// listLi[0].addEventListener('dbclick',testFunc());




