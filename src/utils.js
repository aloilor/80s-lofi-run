var clock = new THREE.Clock();

var offset = 0.5;           // OFFSET BETWEEN THE 5 TRACKS OF THE ROAD

var coinMid = -0.17;        // TO PUT THE COIN IN THE MIDDLE OF THE ROAD ()


var score = 0;              // PLAYER SCORE -- IT WILL INCREMENT EVERY TIME THE PLAYER GETS A BITCOIN 


var max_distance = 70;      // MAX DISTANCE FROM THE CAMERA IN WHICH THE BITCOINS WILL SPAWN, 
                            // TO KEEP CLEAN AND FAST THE GAME

var lives = 5;              // NUMBER OF LIVES OF THE CAR

var keepGoing = true;        // VARIABLE TO KNOW IF THE CAR HAS STOPPED OR NOT

var carSpeed = 0.09;

// FUNCTION TO RETURN THE HIERARCHY OF THE OBJECTS
function dumpObject(obj, lines = [], isLast = true, prefix = '') {
    const localPrefix = isLast ? '└─' : '├─';
    lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
    const newPrefix = prefix + (isLast ? '  ' : '│ ');
    const lastNdx = obj.children.length - 1;
    obj.children.forEach((child, ndx) => {
      const isLast = ndx === lastNdx;
      dumpObject(child, lines, isLast, newPrefix);
    });
    return lines;
}


function freeTheScene(obj){
  for (i = 0; i < obj.length; i++){
    scene.remove(obj[i]);
    obj.splice(obj.indexOf(obj[i]), 1);
  }
}