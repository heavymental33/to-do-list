

// Global Variables
var planification = [];
var design = [];
var production = [];
var testing = [];
var projectManagement = [];

const planifList = document.querySelector("ul[id='list-planning']");

// ES6 function to look if the user enter a value
const emptyValue = (value) => {
    if(value === "" || value === null || value === undefined || value.indexOf("  ") >= 0 || value === " ") {
        return true
    } else {
        return false
    }
}

// Take the value from the user input text box
function addInput(section, arr) {
    arr.push([section]);
    console.log(planification);
    console.log(design);
    console.log(production);
    console.log(testing);
    console.log(projectManagement);
}

function delInput(section, arr) {
    arr.pop(section);
    console.log(planification);
    console.log(design);
    console.log(production);
    console.log(testing);
    console.log(projectManagement);
}

function injectList(arr) {
    //let last = arr[arr.length - 1];
    if(arr === planification) {
		var li = document.getElementById("list-planning");
        li.innerHTML += '<li class="list-group-item mt-3">' + arr.slice(-1)[0][0] + 
                        '<i class="fas fa-check-circle space-icons" id="del"></i><i class="fas fa-eraser space-icons"></i>'
                        '</li>';
              
    } else if(arr === design) {
        let html = '<li class="list-group-item">arr[arr.length - 1]</li>';
        document.getElementById("list-design").innerHTML = html;  
    } else if(arr === production) {
        let html = '<li class="list-group-item">arr[arr.length - 1]</li>';
        document.getElementById("list-production").innerHTML = html;  
    } else if(arr === testing) {
        let html = '<li class="list-group-item">arr[arr.length - 1]</li>';
        document.getElementById("list-testing").innerHTML = html;  
    } else if(arr === projectManagement) {
        let html = '<li class="list-group-item">arr[arr.length - 1]</li>';
        document.getElementById("list-pm").innerHTML = html;   
    }
    
}

// Function who save the arrays into the localstorage
function saveData(arr) {
    if(arr === planification) {
        localStorage.setItem("plannning", JSON.stringify(planification));
    } else if(arr === design) {
        localStorage.setItem("design", JSON.stringify(design));
    } else if(arr === production) {
        localStorage.setItem("production", JSON.stringify(production));
    } else if(arr === testing) {
        localStorage.setItem("testing", JSON.stringify(planification));
    } else if(arr === projectManagement) {
        localStorage.setItem("pm", JSON.stringify(projectManagement)); 
    } else {
        console.log("Error no data received!")
    }
}

function deleteLi() {

}



// Send input from section text to array (EventListener of the "+")

document.getElementById("add-planning").addEventListener("click", function(){
    var x = document.getElementById("planning-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
        addInput(x, planification);
        document.getElementById("planning-input").value = "";
        injectList(planification);
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

document.getElementById("add-production").addEventListener("click", function(){
    var x = document.getElementById("production-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, production);
     document.getElementById("production-input").value = "";
    }
});

document.getElementById("add-testing").addEventListener("click", function(){
    var x = document.getElementById("testing-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, testing);
     document.getElementById("testing-input").value = "";
    }
});

document.getElementById("pm-testing").addEventListener("click", function(){
    var x = document.getElementById("pm-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, projectManagement);
     document.getElementById("pm-input").value = "";
    }
});

// Delete and Done buttons
document.addEventListener('click',function(e){
    var elem = document.getElementById(e.target);
    if(e.target && e.target.id == 'del'){
        var close = document.getElementsByClassName("space-icons");
        var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
          
     } 
     
 });

