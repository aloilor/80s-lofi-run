// CHANGE OPACITY WHEN THERE IS A COLLISION

/*
chassis = car1.getObjectByName('Object_7');
chassis.material.opacity = 0.1;
chassis.material.transparent = true;
*/

var collisionFlag = false;      // VARIABLE TO KNOW IF THERE HAS BEEN A COLLISION WITH AN OBSTACLE
var collisionSpan = 0.5;          // TIME IN WHICH THE CAR WILL KEEP DISAPPEARING AND REAPPEARING IN SECONDS
var collisionStart = 0;

var obstacles = new Array();
var gap_between_obstacles = 15;
var obsStart = -20;
var obs_range = 0.35; // RANGE IN WHICH THE CAR WILL COLLIDE TO THE OBSTACLE
var poss_x_obs_pos = [
    -0.75,
    -0.75 + offset,
    -0.75 + 2*offset,
    -0.75 + 3*offset
]


function obs_spawn(fence){
    var x = poss_x_obs_pos[ Math.floor(Math.random() * poss_x_obs_pos.length) ];
    var clone = fence.clone();
    clone.position.set(x, fencePosY, obsStart);
    obstacles.push(clone);
    scene.add(clone);
    console.log(obstacles.length);
    obsStart -= gap_between_obstacles;
}

function random_obs_spawn(fence){
    while(Math.abs(obsStart) < Math.abs(camera.position.z) + max_distance){
        obs_spawn(fence);
    }
}

function obs_collision_aux(car, i){
    if (car.position.x >= obstacles[i].position.x - offset &&
        car.position.x <= obstacles[i].position.x + offset && 
        Math.abs(car.position.z) >= Math.abs(obstacles[i].position.z) - obs_range && 
        Math.abs(car.position.z) <= Math.abs(obstacles[i].position.z) + obs_range &&
        car.position.y <= obstacles[i].position.y + 0.4
        ){
            console.log("obstacle collide");
            crashPlay();
            return true;
        }
    else return false;
}

function obs_collision(car){
    //console.log(car.position.x);
    for (i = 0; i < obstacles.length; i++){
        if (obs_collision_aux(car, i)) {
            //lives -= 1;
            return true;
        }
    }
}


function check_obs_aux(obj, i){
    if (obj.position.x >= obstacles[i].position.x - offset &&
        obj.position.x <= obstacles[i].position.x + offset && 
        Math.abs(obj.position.z) >= Math.abs(obstacles[i].position.z) - obs_range && 
        Math.abs(obj.position.z) <= Math.abs(obstacles[i].position.z) + obs_range
        )
            return true;  
    else return false;
}


function check_obs(obj){    //USEFUL FUNCTION TO CHECK IF OBJ IS GETTING SPAWNED 
                            // WHERE THERE'S ALREADY AN OBSTACLE    
    for (i = 0; i < obstacles.length; i++){
        if (check_obs_aux(obj, i)) return true;
    }
    return false;
}




