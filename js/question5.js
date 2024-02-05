//no JS really necessary for responsiveness...

let switchStyle = document.getElementById("switchStyle");

let darkBool = false;
//make bool to save settings later on + grab element from stylesheet id


//local storage for light/dark mode
if(localStorage.getItem("savePreference")){
    darkBool = JSON.parse(localStorage.getItem("savePreference"));
}

if(darkBool === false){
    switchStyle.href = "../css/style.css";
}else if(darkBool === true){
    switchStyle.href = "../css/mystyel.css";
}
