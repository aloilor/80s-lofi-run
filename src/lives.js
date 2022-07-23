
var livesArray = new Array();
var source = "../images/life.png"

livesArray[0] = document.getElementById("idLife0");

for (i = 1; i < lives; i++){
    var life = document.createElement('img');
    life.src = source;
    life.id = 'idLife'+i;
    //console.log(life.id);
    document.getElementById("lives").appendChild(life);
    livesArray.push(life);
}
//console.log(livesArray.length);