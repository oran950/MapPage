

function myMap() {
    var mapProp ={//defines the properties for the map
        center:new google.maps.LatLng(51.323454 , -0.123850),zoom:5 //specifies where to center the map
    };
    var map =new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapOptions1);
var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapOptions2);
var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapOptions3);
var map4 = new google.maps.Map(document.getElementById("googleMap4"), mapOptions4);

