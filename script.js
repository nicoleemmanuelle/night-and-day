const whole = document.getElementById("whole");
const moonOrSun = document.getElementById("moon-sun");
let currentMode = localStorage.getItem("currentMode");
console.log(currentMode);

let previousMode = (localStorage.getItem('previousMode') !== null);

if (previousMode) {
    // Reload previous mode
    reloadPreviousMode();
}


function switchMode() { 
    if (document.getElementById("morning-sky")) {
        nightMode();
    }
    else {
        dayMode();
    }
    reloadPreviousMode();
}

function nightMode() {
    document.getElementById("morning-sky").id = "night-sky";

    // Moon
    document.getElementById("moon-sun").src = "images/moon.png";

    // Stars
    for (let i = 1; i < 7; i++) {
        document.getElementById(`bird-${i}`).src = "images/night_star.png";
        document.getElementById(`bird-${i}`).id = `star-${i}`;
    }
    
    // Change the small clouds
    for (let i = 1; i < 4; i++) {
        document.getElementById(`small-cloud-${i}`).src = `images/night_small_cloud_${i}.png`;
    }

    // Change the big clouds
    for (let i = 1; i < 4; i++) {
        document.getElementById(`big-cloud-${i}`).src = `images/night_cloud_${i}.png`;
    }

    saveCurrentMode("night");
    saveData();
}

function dayMode() {
    document.getElementById("night-sky").id = "morning-sky";

    // Sun
    document.getElementById("moon-sun").src = "images/sun.png";

    // Bids
    for (let i = 1; i < 7; i++) {
        /*document.getElementById(`star-${i}`).removeAttribute("src");*/
        document.getElementById(`star-${i}`).src = "images/morning_bird.png";
        document.getElementById(`star-${i}`).id = `bird-${i}`;
    }
    
    // Change the small clouds
    for (let i = 1; i < 4; i++) {
        document.getElementById(`small-cloud-${i}`).src = `images/morning_small_cloud_${i}.png`;
    }

    // Change the big clouds
    for (let i = 1; i < 4; i++) {
        document.getElementById(`big-cloud-${i}`).src = `images/morning_cloud_${i}.png`;
    }

    saveCurrentMode("day");
    saveData();
}

function saveCurrentMode(mode) {
    localStorage.setItem("currentMode", mode);
}

function saveData(){
    localStorage.setItem("previousMode", whole.innerHTML);
}

function reloadPreviousMode() {
    whole.innerHTML = localStorage.getItem("previousMode");
}

