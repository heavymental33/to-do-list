

// Global Variables
var planification = [];
var design = [];
var production = [];
var testing = [];
var projectManagement = [];

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
    arr.push(section);
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
        // let html = document.getElementById("list-planning");
        
        var ul = document.createElement("ul");
		document.getElementById("list-planning").appendChild(ul);
		var li = document.createElement("li");
		ul.appendChild(li);
        li.innerHTML += '<li class="list-group-item">' + arr.slice(-1)[0] + 
            '<a href="#" class="badge badge-info priority">Low</a><span class="badge badge-warning priority">Normal</span><span class="badge badge-danger priority">High</span>'
            
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

// function retreiveData(plan, dsg, pro, test, manage) {
//     // Not complete ,just some ideas
//     for (x in localStorage){
//         console.log(localStorage.getItem(x));
//     }
// }

function applyPriority(priority) {

}


// Send input from section text to array (EventListener of the "?")

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