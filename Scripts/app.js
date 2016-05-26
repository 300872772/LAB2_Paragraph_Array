/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("homePara");
    paragraphElements[1] = document.getElementById("projectPara");
    paragraphElements[2] = document.getElementById("aboutPara");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "I do what I BeLiEvE. I am trying demonstrate my own World.";
    paragraphs[1] = "Have a look on my projects.";
    paragraphs[2] = "My name is MD MAMUNUR RAHMAN";
    
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
})();