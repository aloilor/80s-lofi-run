function play(){
    var diff = document.getElementById('difficulty').innerHTML;
    if (diff == "EXTREME"){
        var checkBloom = $("#checkBloom").val();
        var checkBlur = $("#checkBlur").val();
        window.location.href = "./src/play.html?diff=EXTREME" + "&bloom=" + checkBloom + "&blur=" + checkBlur;
    }
    if (diff == "NORMAL"){
        var checkBloom = $("#checkBloom").val();
        var checkBlur = $("#checkBlur").val();
        window.location.href = "./src/play.html?diff=NORMAL" + "&bloom=" + checkBloom + "&blur=" + checkBlur;
    }
    if (diff == "EASY"){
        var checkBloom = $("#checkBloom").val();
        var checkBlur = $("#checkBlur").val();
        window.location.href = "./src/play.html?diff=EASY" + "&bloom=" + checkBloom + "&blur=" + checkBlur;
    }
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

function changeBloom(){
    var checkBloom = $("#checkBloom").val();    
    if (checkBloom == "false"){
        document.getElementById("checkBloom").value = "true";   
    } else {
        document.getElementById("checkBloom").value = "false";   
    }
   
}

function changeBlur(){
    var checkBlur = $("#checkBlur").val();    
    if (checkBlur == "false"){
        document.getElementById("checkBlur").value = "true";   
    } else {
        document.getElementById("checkBlur").value = "false";   
    }
   
}


