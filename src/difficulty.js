const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const diff = urlParams.get("diff");


if (diff == "EASY"){
    lives = 5;
    carSpeed = 0.09;
}

if (diff == "NORMAL"){
    lives = 3;
    carSpeed = 0.12;
}

if (diff == "EXTREME"){
    lives = 1;
    carSpeed = 0.15;
}