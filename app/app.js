

// Global Variables
var planification = [];
var design = [];
var production = [];
var testing = [];
var projectManagement = [];


// ES6 function to look if the user enter a value
const emptyValue = (value) => {
    if(value === "" || value === null || value === undefined) {
        return true
    } else {
        return false
    }
}

// Take the value from the user input text box
function addInput(section, arr) {
    arr.push(section);
    console.log(planification);
    console.log(design);
}

function delInput() {

}

function retreiveData(plan, dsg, pro, test, manage) {

}


// Send input from section text to array

document.getElementById("add-planning").addEventListener("click", function(){
    var x = document.getElementById("planning-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
        addInput(x, planification);
        document.getElementById("planning-input").value = "";     
    }   


  });

  document.getElementById("add-design").addEventListener("click", function(){
    var x = document.getElementById("design-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, design);
     document.getElementById("design-input").value = "";
    }
  });