let studentName = document.getElementById("studentName");
let aBtn = document.getElementById("aBtn");
let bBtn = document.getElementById("bBtn");
let cBtn = document.getElementById("cBtn");
let dBtn = document.getElementById("dBtn");
let eBtn = document.getElementById("eBtn");
let fBtn = document.getElementById("fBtn");
let gBtn = document.getElementById("gBtn");
let hBtn = document.getElementById("hBtn");
let iBtn = document.getElementById("iBtn");
let jBtn = document.getElementById("jBtn");
let kBtn = document.getElementById("kBtn");
let lBtn = document.getElementById("lBtn");
let mBtn = document.getElementById("mBtn");
let nBtn = document.getElementById("nBtn");
let oBtn = document.getElementById("oBtn");
let pBtn = document.getElementById("pBtn");
let qBtn = document.getElementById("qBtn");
let rBtn = document.getElementById("rBtn");
let sBtn = document.getElementById("sBtn");
let tBtn = document.getElementById("tBtn");
let uBtn = document.getElementById("uBtn");
let vBtn = document.getElementById("vBtn");
let wBtn = document.getElementById("wBtn");
let xBtn = document.getElementById("xBtn");
let yBtn = document.getElementById("yBtn");
let zBtn = document.getElementById("zBtn");

let Fname = document.getElementById("Fname");
let Lname = document.getElementById("Lname");

//bool for first name or last name display
let switcheroo = false;

let switchStyle = document.getElementById("switchStyle");

let darkBool = false;
//make bool to save settings later on + grab element from stylesheet id

if(darkBool === false){
    switchStyle.href = "../css/style.css";
}else if(darkBool === true){
    switchStyle.href = "../css/mystyel.css";
}


//local storage for light/dark mode
if(localStorage.getItem("savePreference")){
    darkBool = JSON.parse(localStorage.getItem("savePreference"));
}




//array for students
let studentArray = [
    {
        "firstName": "Avery",
        "lastName": "Hillstrom"
    },
    {
        "firstName": "Bria",
        "lastName": "Harrold"
    },
    {
        "firstName": "Caleb",
        "lastName": "Sylvia"
    },
    {
        "firstName": "Ellie",
        "lastName": "Rasuli"
    },
    {
        "firstName": "Fernando",
        "lastName": "Gutierrez"
    },
    {
        "firstName": "Halley",
        "lastName": "Pham"
    },
    {
        "firstName": "Kyle",
        "lastName": "Ma"
    },
    {
        "firstName": "Max",
        "lastName": "Mendoza"
    },
    {
        "firstName": "Robert",
        "lastName": "Arias"
    },
    {
        "firstName": "Sinatha",
        "lastName": "Chin"
    },
    {
        "firstName": "Toan",
        "lastName": "Ngo"
    },
    {
        "firstName": "Xavier",
        "lastName": "Hopkins"
    }
];

//first and last name buttons, use switcheroo bool
Fname.addEventListener("click", ()=>{
    switcheroo = false;
});

Lname.addEventListener("click", ()=>{
    switcheroo = true;
})



//just add if/else if for bool to be able to switch how name is displayed. only added event listeners to btns that have data (12)

aBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = (studentArray[0].firstName) + " " + (studentArray[0].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[0].lastName) + " " + (studentArray[0].firstName)
    }
});
bBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[1].firstName + " " + (studentArray[1].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[1].lastName) + " " + (studentArray[1].firstName)
    }
});
cBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[2].firstName  + " " + (studentArray[2].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[2].lastName) + " " + (studentArray[2].firstName)
    }
});
eBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[3].firstName  + " " + (studentArray[3].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[3].lastName) + " " + (studentArray[3].firstName)
    }
})
fBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[4].firstName + " " + (studentArray[4].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[4].lastName) + " " + (studentArray[4].firstName)
    }
})
hBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[5].firstName + " " + (studentArray[5].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[5].lastName) + " " + (studentArray[5].firstName)
    }
})
kBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[6].firstName + " " + (studentArray[6].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[6].lastName) + " " + (studentArray[6].firstName)
    }
})
mBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[7].firstName + " " + (studentArray[7].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[7].lastName) + " " + (studentArray[7].firstName)
    }
})
rBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[8].firstName + " " + (studentArray[8].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[8].lastName) + " " + (studentArray[8].firstName)
    }
})
sBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[9].firstName + " " + (studentArray[9].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[9].lastName) + " " + (studentArray[9].firstName)
    }
})
tBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[10].firstName + " " + (studentArray[10].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[10].lastName) + " " + (studentArray[10].firstName)
    }
})
xBtn.addEventListener("click", function(){
    if(switcheroo === false){
    studentName.innerText = studentArray[11].firstName + " " + (studentArray[11].lastName)
    }else if(switcheroo === true){
        studentName.innerText = (studentArray[11].lastName) + " " + (studentArray[11].firstName)
    }
})

