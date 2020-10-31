

// Global Variables
var planification = [];
var design = [];
var production = [];
var testing = [];
var projectManagement = [];

// const planifList = document.querySelector("ul[id='list-planning']");

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
        li.innerHTML += '<li class="list-group-item mt-3 plan">' + arr.slice(-1)[0][0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';
    } else if(arr === design) {
        var li = document.getElementById("list-design");
        li.innerHTML += '<li class="list-group-item mt-3 des">' + arr.slice(-1)[0][0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';
    } else if(arr === production) {
        var li = document.getElementById("list-production");
        li.innerHTML += '<li class="list-group-item mt-3 prod">' + arr.slice(-1)[0][0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>'; 
    } else if(arr === testing) {
        var li = document.getElementById("list-testing");
        li.innerHTML += '<li class="list-group-item mt-3 test">' + arr.slice(-1)[0][0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';  
    } else if(arr === projectManagement) {
        var li = document.getElementById("list-pm");
        li.innerHTML += '<li class="list-group-item mt-3 pm">' + arr.slice(-1)[0][0] + 
                        '<i class="fas fa-check-circle space-icons"></i><i class="fas fa-eraser space-icons" id="del"></i>'
                        '</li>';
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


function searchArrays(elem,arr) { // Ajouté array comme paramètre
    console.log("Fonction lancé!" + planification + " " + elem);
    let z = function() {
        return elem;
    }
    y = function() {
        num = elem;
        return closest(num);
    }
    var n = planification.findIndex(z), n1 = design.findIndex(z), n2 = production.findIndex(z), n3 = testing.findIndex(z), n4 = projectManagement.findIndex(z);
    if(n !== -1 && arr === "planification") {
        planification.splice(n, 1);
    } else if(n1 !== -1 && arr === "design") {
        design.splice(n1, 1);
    } else if(n2 !== -1 && arr === "production") {
        production.splice(n2, 1);
    } else if(n3 !== -1 && arr === "testing") {
        testing.splice(n3, 1);
    } else if(n4 !== -1 && arr === "pm") {
        projectManagement.splice(n4, 1);
    } else {
        console.log("Dont work my friend!");
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
            console.log(div,val);
            console.log(div.className + "************************");
            if(div.className.search("plan") !== -1) {
               console.log("IT WORKD!!!!!!!!!!!!!!");
                searchArrays(val,"planification"); 
            } else if(div.className.search("des") !== -1) {
                searchArrays(val,"design");
            } else if(div.className.search("prod") !== -1) {
                searchArrays(val,"production");
            } else if(div.className.search("test") !== -1) {
                searchArrays(val,"testing");
            } else if(div.className.search("pm") !== -1) {
                searchArrays(val,"pm");
            }
            console.log(val);
            div.style.display = "none";
          }
        }
          
     } 
     
 });

