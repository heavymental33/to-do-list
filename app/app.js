

// Global Variables
var planification = [];
var design = [];
var production = [];
var testing = [];
var projectManagement = [];





// Take the value from the user input text box
function addInput() {
    planification.push(document.getElementById("planning-input").value);
    console.log(planification);
}







// Send input from section text to array

document.getElementById("add-planning").addEventListener("click", function(){
     addInput();

  });