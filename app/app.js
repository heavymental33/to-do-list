// Global Variables
var planification = [];
var design = [];
var production = [];
var testing = [];
var projectManagement = [];
//localStorage.clear();
console.log(localStorage.getItem("planification"));
console.log(localStorage.getItem("design"));


// function to look if the user enter a value
function emptyValue(value) {
    if (value === "" || value === null || value === undefined || value.indexOf("  ") >= 0 || value === " ") {
        return true;
    } else {
        return false;
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
    arr.pop([section]);
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
        li.innerHTML += '<li class="list-group-item mt-3 plan">' + arr.slice(-1)[0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';
    } else if(arr === design) {
        var li = document.getElementById("list-design");
        li.innerHTML += '<li class="list-group-item mt-3 des">' + arr.slice(-1)[0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';
    } else if(arr === production) {
        var li = document.getElementById("list-production");
        li.innerHTML += '<li class="list-group-item mt-3 prod">' + arr.slice(-1)[0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>'; 
    } else if(arr === testing) {
        var li = document.getElementById("list-testing");
        li.innerHTML += '<li class="list-group-item mt-3 test">' + arr.slice(-1)[0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';  
    } else if(arr === projectManagement) {
        var li = document.getElementById("list-pm");
        li.innerHTML += '<li class="list-group-item mt-3 pm">' + arr.slice(-1)[0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';
    }   
}
// Function who save the arrays into the localstorage
function saveData(arr) {
    if(arr === "planification") {
        localStorage.setItem("planification", JSON.stringify(planification));
    } else if(arr === "design") {
        localStorage.setItem("design", JSON.stringify(design));
    } else if(arr === "production") {
        localStorage.setItem("production", JSON.stringify(production));
    } else if(arr === "testing") {
        localStorage.setItem("testing", JSON.stringify(testing));
    } else if(arr === "pm") {
        localStorage.setItem("pm", JSON.stringify(projectManagement)); 
    } else {
        console.log("Error no data received!");
        alert("No data received!");
    }
}

// Search into an array the value of the deleted element and retreive it from the array
function searchArrays(elem,arr) { 
    var n = planification.indexOf(elem), n1 = design.indexOf(elem), n2 = production.indexOf(elem), n3 = testing.indexOf(elem), n4 = projectManagement.indexOf(elem);
    if(n !== -1 && arr === "planification") {
        planification.splice(n, 1);
        saveData("planification");
        console.log(planification);
    } else if(n1 !== -1 && arr === "design") {
        design.splice(n1, 1);
        saveData("design");
        console.log(design);
    } else if(n2 !== -1 && arr === "production") {
        production.splice(n2, 1);
        saveData("pproduction");
    } else if(n3 !== -1 && arr === "testing") {
        testing.splice(n3, 1);
        saveData("testing");
    } else if(n4 !== -1 && arr === "pm") {
        projectManagement.splice(n4, 1);
        saveData("pm");
    } else {
        console.log("No data!");
        alert("No data!");
    }
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
        saveData("planification");
     }
  
});

document.getElementById("add-design").addEventListener("click", function(){
    var x = document.getElementById("design-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, design);
     document.getElementById("design-input").value = "";
     injectList(design);
     saveData("design");
    }
});

document.getElementById("add-production").addEventListener("click", function(){
    var x = document.getElementById("production-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, production);
     document.getElementById("production-input").value = "";
     injectList(production);
     saveData("production");
    }
});

document.getElementById("add-testing").addEventListener("click", function(){
    var x = document.getElementById("testing-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, testing);
     document.getElementById("testing-input").value = "";
     injectList(testing);
     saveData("testing");
    }
});

document.getElementById("pm-testing").addEventListener("click", function(){
    var x = document.getElementById("pm-input").value;
    if(emptyValue(x) == true) {
        alert("Invalid! Please enter a value");
    } else {
     addInput(x, projectManagement);
     document.getElementById("pm-input").value = "";
     injectList(projectManagement);
     saveData("pm");
    }
});

// Delete and Done buttons
document.addEventListener('click',function(e){
    // var elem = document.getElementById(e.target);
    if(e.target && e.target.id == 'del'){
        var close = document.getElementsByClassName("space-icons");
        var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            var val = div.innerText;
            if(div.className.search("plan") !== -1) {
                searchArrays(val,"planification");
                //saveData("planification"); 
            } else if(div.className.search("des") !== -1) {
                searchArrays(val,"design");
                saveData("design");
            } else if(div.className.search("prod") !== -1) {
                searchArrays(val,"production");
                saveData("production");
            } else if(div.className.search("test") !== -1) {
                searchArrays(val,"testing");
                saveData("testing");
            } else if(div.className.search("pm") !== -1) {
                searchArrays(val,"pm");
                saveData("pm");
            }
            console.log(val);
            div.style.display = "none";
          }
        }   
     } 
 });

