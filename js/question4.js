let wClass = document.getElementById("wickedCssClass");
let wBtn = document.getElementById("wickedCSSBtn");
let rndm = document.getElementById("randomCSSBtn");
let result = document.getElementById("result");

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

//array to hold all the wickedcss class names
let wArr = ["barrelRoll", "fadeIn", "floater", "heartbeat", "pulse", "rollerLeft", "rollerRight", "rotateIn", "rotateInLeft", "rotateInRight", "rotation", "shake", "sideToSide", "slideDown", "slideLeft", "slideRight", "slideUp", "spinner", "wiggle", "zoomer", "zoomerOut"];

//random button calls from array data
rndm.addEventListener("click", (e) =>{
    let num = Math.floor(Math.random() * 21);
    //21 different wickedcss classes, randomly generate number 1-21
    result.className = `${wArr[num]} simple-box pt-5`
});

//wicked btn uses input value as class name, so it must be typed correctly to work
wClass.addEventListener("click", (e)=>{
    //enters value as class name
    result.className = `${wClass.value} simple-box pt-5`
})

