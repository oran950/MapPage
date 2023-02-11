
  let marker= google.maps.Marker;
  let map;
  let infoWindow;
  async function myMap() {
        // alert("HELLO AGAIN")

        var Prop ={//defines the properties for the map
        center:new google.maps.LatLng(48.85730340161112, 2.2959846790405827),zoom:15, //specifies where to center the map
        mapID:'85f087c0778c209c'};
        var map = new google.maps.Map(document.getElementById("googleMap"),Prop);
        

  // Define the  coordinates for the polygon.
const polyShape = [
    {lat:48.857788136757456, lng:2.291895548150846},
    {lat:48.85668970175206,lng:2.2935411276537083 },
    {lat:48.85858801114013, lng:2.2963295084184914},
    {lat:48.859949618337, lng: 2.294874044643201}];



    my_polygon = new google.maps.Polygon(
  {
  path:polyShape,
	strokeColor:'#222',
	strokeOpacity: 0.5,
	strokeWeight:1,
	fillColor:'#133c55',
	fillOpacity:0.5,
  draggable: true, 
  editable: true,
  geodesic:true    
});




//Display Coordinates below map
function getPolygonCoords() {
    var len = my_polygon.getPath().getLength();
    var htmlStr = "";
    for (var i = 0; i < len; i++) {
      htmlStr += "new google.maps.LatLng(" + my_polygon.getPath().getAt(i).toUrlValue(5) + "), \n";
    }
    document.getElementById('info').innerHTML = htmlStr;
  }

  my_polygon.setMap(map);// map is belong to myMap() function , how i get into it? in a seprate function;
  // my_polygon.addListener("bounds_changed", showNewpolygon);
  google.maps.event.addListener(my_polygon.getPath(), "insert_at", getPolygonCoords);
  google.maps.event.addListener(my_polygon.getPath(), "set_at", getPolygonCoords);

  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon: "https://static.vecteezy.com/system/resources/thumbnails/004/362/934/small/target-line-icon-outline-logo-illustration-linear-pictogram-isolated-on-white-vector.jpg",
      fillOpacity: 0.7,
      strokeWeight: 5,
      clickable: true,
      editable: true,
      draggable: true, 
      zIndex: 1,
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 0.7,
      strokeWeight: 5,
      clickable: true,
      editable: true,
      draggable: true, 
      zIndex: 1,
    },

    rectangleOptions: {
      fillColor: "#133c55",
      fillOpacity: 0.5,
      strokeWeight: 5,
      clickable: true,
      editable: true,
      draggable: true, 
      zIndex: 1,
    },

    polylineOptions: {
      
      fillColor:  "#0000FF",
      fillOpacity: 0.5,
      strokeWeight: 5,
      clickable: true,
      editable: true,
      draggable: true, 
      zIndex: 1,
    },
   
  
  PolygonOptions: {
    fillColor: "#ffff00",
    fillOpacity: 1,
    strokeWeight: 5,
    clickable: true,
    editable: true,
    draggable: true, 
    zIndex: 1,
  },

  });

  drawingManager.setMap(map);

  
  }

  // function showNewpolygon() {  not working .. should display infoWindow
  //   const ne = my_polygon.getBounds().getNorthEast();
  //   const sw = my_polygon.getBounds().getSouthWest();
  //   const contentString =
  //     "<b>Rectangle moved.</b><br>" +
  //     "New north-east corner: " +
  //     ne.lat() +
  //     ", " +
  //     ne.lng() +
  //     "<br>" +
  //     "New south-west corner: " +
  //     sw.lat() +
  //     ", " +
  //     sw.lng();
  
  //   // Set the info window's content and position.
  //   infoWindow.setContent(contentString);
  //   infoWindow.setPosition(ne);
  //   infoWindow.open(map);
  // }

  // window.myMap = myMap;

  function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }

  
  
  

   
  




  

