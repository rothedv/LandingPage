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
const navbarHeight = navbar.offsetHeight;
const screenHeight = window.innerHeight;
const sectionPadding = parseInt(window.getComputedStyle(document.querySelector('.landing__container')).getPropertyValue('padding-top'),10);
let activeSection;

// Function to set sections as active
document.addEventListener('scroll', function(){
    //Loop through all sections in document
    for (let sec of sectionList){
        console.log(sectionPadding);
        // Check if one of the sections is in the viewport of the users screen. 
        // If there are multiple sections on the screen choose the section which captures more then half of the screen
        if(((sec.getBoundingClientRect().y + sectionPadding)>=0) & ((sec.getBoundingClientRect().y)<(sectionPadding))){
            //Check if this section is already active
            if(activeSection!=sec.id){
                //Get the listItem in the Header Navigation which links this section and add the class "active" to it
                document.getElementById(sec.dataset.nav).classList.add('active');
                //Setting the activeSection Variable 
                activeSection = sec.id;
                //Loop through all sections in document (again)
                for (secObs of sectionList){
                    //Only jump in if its not the current section
                    if (secObs.id !=  sec.id){
                        //remove the active class from the list elements
                        document.getElementById(secObs.dataset.nav).classList.remove('active');
                    }
                }
            }
            //If this section is already active, exit loop
            else{
                return;
            }
        }
    }
});



// Build menu 
for (let sec of sectionList){
    //  Populating the "heading" constant with the Text content of the collected heading  
    const heading = sec.querySelector('h2').textContent;
    // Creating a new list item and store it in the constant "item"
    const item = document.createElement('li');
    item.textContent = heading;
    item.setAttribute("id", sec.dataset.nav);
    navbar.appendChild(item);
    // Scroll to section on link click
    item.addEventListener('click', function(){
        sec.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } );
    
}


// 





