
  async function myMap() {
        // alert("HELLO AGAIN")

        var Prop ={//defines the properties for the map
        center:new google.maps.LatLng(48.85730340161112, 2.2959846790405827),zoom:15, //specifies where to center the map
        mapID:'85f087c0778c209c'
        };
        let map = new google.maps.Map(document.getElementById("googleMap"),Prop);
        


const polyShape = [
    {lat:48.857788136757456, lng:2.291895548150846},
    {lat:48.85668970175206,lng:2.2935411276537083 },
    {lat:48.85858801114013, lng:2.2963295084184914},
    {lat:48.859949618337, lng: 2.294874044643201}];



    my_polygon = new google.maps.Polygon(
    {path:polyShape,
	strokeColor:'#222',
	strokeOpacity: 0.5,
	strokeWeight:1,
	fillColor:'#133c55',
	fillOpacity:0.5,
    draggable: true, // turn off if it gets annoying
    editable: true
    
});

    my_polygon.setMap(map);// map is belong to myMap() function , how i get into it? in a seprate function
    google.maps.event.addListener(my_polygon.getPath(), "insert_at", getPolygonCoords);
    //google.maps.event.addListener(myPolygon.getPath(), "remove_at", getPolygonCoords);
    google.maps.event.addListener(my_polygon.getPath(), "set_at", getPolygonCoords);


//Display Coordinates below map
function getPolygonCoords() {
    var len = my_polygon.getPath().getLength();
    var htmlStr = "";
    for (var i = 0; i < len; i++) {
      htmlStr += "new google.maps.LatLng(" + my_polygon.getPath().getAt(i).toUrlValue(5) + "), ";
      //Use this one instead if you want to get rid of the wrap > new google.maps.LatLng(),
    //   htmlStr += "" + my_polygon.getPath().getAt(i).toUrlValue(5);
    }
    document.getElementById('info').innerHTML = htmlStr;
  } 
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }

//   function initWebGLOverlayView (map) {
//     let scene, renderer, camera, loader;
//     // WebGLOverlayView code goes here
//   }
//   (async () => {        
//     const map = await initMap();
//   })();



// var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapOptions1);
// var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapOptions2);
// var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapOptions3);
// var map4 = new google.maps.Map(document.getElementById("googleMap4"), mapOptions4);


