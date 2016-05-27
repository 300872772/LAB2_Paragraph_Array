/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    
    // define arrays of HTML elements
    var paragraphHeading = [];
    var paragraphElements = [];
    
    //bonding ids with paragraphHeading arrays
    paragraphHeading [0]= document.getElementById("homeHeading");
    paragraphHeading [1]= document.getElementById("projectHeading");
    paragraphHeading [2]= document.getElementById("aboutHeading");
    paragraphHeading [3]= document.getElementById("blogHeading");
    
    //bonding ids with paragraphElements arrays
    paragraphElements[0] = document.getElementById("homePara");
    paragraphElements[1] = document.getElementById("projectPara");
    paragraphElements[2] = document.getElementById("aboutPara");
    paragraphElements[3] = document.getElementById("blogPara");
    
   // define your paragraphHeadingText array;
    var paragraphsHeadingText = [];
    
    // data for my Paragraph Heading
    paragraphsHeadingText[0] = "WELCOME TO MY WORLD";
    paragraphsHeadingText[1] = "MY PROJECTS";
    paragraphsHeadingText[2] = "BIOGRAPHY";
    paragraphsHeadingText[3] = "MY BLOGS";
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "I do what I BeLiEvE. I am trying demonstrate my own World.";
    paragraphs[1] = "Have a look on my projects.";
    paragraphs[2] = "My name is MD MAMUNUR RAHMAN";
    paragraphs[3] = "Have a look on my blogs";
    
    // second way to define an array
    //var paragraphs = new Array();
   
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
         paragraphHeading[index].textContent= paragraphsHeadingText[index]
         
        }
    }
    
    
})();