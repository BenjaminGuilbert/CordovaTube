function onDeviceReady() {
    var options = {
    quality: 40,
    destinationType:Camera.DestinationType.DATA_URL
    };
    navigator.camera.getPicture(
                                onSuccess,
                                onError,
                                options );
}

document.addEventListener('deviceready', onDeviceReady, false);

function onSuccess( imageData ) {
    var image = document.getElementById( 'photo' );
    image.src = "data:image/jpeg;base64," + imageData;
}

function onError( message ) {
    console.error( message );
}
