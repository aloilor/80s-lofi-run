function play(){
    var diff = document.getElementById('difficulty').innerHTML;
    if (diff == "EXTREME")
        window.location.href = "./src/play.html?diff=EXTREME";
    if (diff == "NORMAL")
        window.location.href = "./src/play.html?diff=NORMAL";
    if (diff == "EASY")
        window.location.href = "./src/play.html?diff=EASY";
}


function decreaseDifficulty(){
    var diff = document.getElementById('difficulty').innerHTML;
    if (diff == "NORMAL"){
        document.getElementById('difficulty').innerHTML = "EASY";
    }
    if (diff == "EXTREME"){
        document.getElementById('difficulty').innerHTML = "NORMAL";
    }
}

function increaseDifficulty(){
    var diff = document.getElementById('difficulty').innerHTML;
    if (diff == "NORMAL"){
        document.getElementById('difficulty').innerHTML = "EXTREME";
    }
    if (diff == "EASY"){
        document.getElementById('difficulty').innerHTML = "NORMAL";
    }
}
