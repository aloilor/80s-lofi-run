
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 30;
camera.position.y = 3;

 var loader = new THREE.GLTFLoader();

 loader.load( '../models/maps/80s-style/neonroad_endless_loop/scene.gltf', function ( gltf ) {

 	scene.add( gltf.scene );

 }, undefined, function ( error ) {

	console.error( error );

 } );



function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
};

animate();