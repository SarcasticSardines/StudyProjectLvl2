//These comments below are all apis that do not need auth
//7Timer! Weather forecastsapi url http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
//Agify.io Predict age based on a name url 'https://api.agify.io?name=Jt' <= you can change the end of the url to somes name for differnt results
//Bored Activity suggestions url https://www.boredapi.com/api/activity

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let val3 = document.getElementById("val3");
let api = document.getElementById("api");
//created p tag to show response from api fetch
let pP = document.getElementById("pP");

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


//create 1 async function to fetch api data from all 3 apis + return statement using api data declared inside the if loops

async function changeIt(){
    if(api.value === "1"){
        const promise = await fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json");
        const data = await promise.json();
        console.log(data);
        pP.innerText = "The weather right now is " + data.dataseries[0].temp2m + " degrees Celsius.";
    }else if(api.value === "2"){
        const promise = await fetch("https://api.agify.io?name=Smith");
        const data = await promise.json();
        console.log(data);
        pP.innerText = "The estimated age of the name Smith is " + data.age;
    }else if(api.value === "3"){
        const promise = await fetch("https://www.boredapi.com/api/activity");
        const data = await promise.json();
    pP.innerText = data.activity;
        console.log(data);
    }else{
        pP.innerText = "";
    }

}
