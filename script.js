if(Modernizr.geolocation){
    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Su Navegador no es compatible con la geolocalización.";
        }
    }

    function showPosition(position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;

        var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
        +latlon+"&zoom=14&size=400x300&sensor=false";
        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }
}else{
    alert("Su navegador no es compatible con la geolocalizacion, se usara una lozalizacion aproximada. Pulse el boton");
}