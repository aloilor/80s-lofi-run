function invincibilityPlay() {

    // instantiate a listener
    const audioListener = new THREE.AudioListener();

    // add the listener to the camera
    camera.add( audioListener );

    // instantiate audio object
    const invincibilitySound = new THREE.Audio( audioListener );
    
    // add the audio object to the scene
    scene.add( invincibilitySound );
    

    // instantiate a loader
    const loaderAudio = new THREE.AudioLoader();
    
    // load a resource
    loaderAudio.load(
        // resource URL
        '../audio/Super Mario Bros. Star Theme (Remix).mp3',
    
        // onLoad callback
        function ( audioBuffer ) {
            // set the audio object buffer to the loaded object
            invincibilitySound.setBuffer( audioBuffer );
    
            // play the audio
            invincibilitySound.play();
        },
    
        // onProgress callback
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
    
        // onError callback
        function ( err ) {
            console.log( 'An error happened' );
        }
    );
    
    }