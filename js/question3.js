let btnDark = document.getElementById("btnDark");
let btnLight = document.getElementById("btnLight");
let switchStyle = document.getElementById("switchStyle");

let darkBool = false;
//make bool to save settings later on + grab element from stylesheet id

if(darkBool === false){
    switchStyle.href = "../css/style.css";
}else if(darkBool === true){
    switchStyle.href = "../css/mystyel.css";
}
//switch theme depending on what bool is set to


btnDark.addEventListener("click", function(e){
    switchStyle.href = "../css/mystyel.css";
    //add localstorage to save pref
    localStorage.setItem("savePreference", JSON.stringify(true));
});

btnLight.addEventListener("click", function(e){
    switchStyle.href = "../css/style.css";
    localStorage.setItem("savePreference", JSON.stringify(false));
});


//saving the current bool to save the user's choice across pages
if(localStorage.getItem("savePreference")){
    darkBool = JSON.parse(localStorage.getItem("savePreference"));
};
//saving bool value to localstorage but not applying ?