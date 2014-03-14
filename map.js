function getdata(){
/*
  var allZips = [];

  $.getJSON('http://localhost:8888/intojson.php', function(data) {

    for(i=0;i<data.length;i++){    
     allZips.push(  JSON.parse(data[i]).name  );     
    }
    console.log( allZips ); // 10001,10002,10003,10004,10005,10006,10007,......

});

*/

console.log('test');
var items = [];
$.getJSON('http://localhost:8888/intojson.php', function(data){

  $.each(data, function(index, array){
    items.push(array.Name, array.Location);
    console.log(items);
    $('#container').append('<p>Name: ' + array.Name + '</p>' + '<p>Location: ' + array.Location + '</p>');
      /*$.each(array, function(category, field){
          
          console.log("category: " + category + ". field: " + field);
      });*/
  });

  console.log(data);
  console.log(data[0].Name);
});

console.log(items);
// var $status= $.getJSON('http://localhost:8888/intojson.php');

// var responseText = object.get("responseText");

// console.log(object);
// console.log(responseText);
// console.log($object.responseJSON[0].Name);
}

// This example creates circles on the map, representing
// populations in the United States.

// First, create an object containing LatLng and population for each city.
//var citymap = {};
/*
citymap['chicago'] = {
  center: new google.maps.LatLng(41.878113, -87.629798),
  population: 2842518
};
citymap['newyork'] = {
  center: new google.maps.LatLng(40.714352, -74.005973),
  population: 8143197
};
citymap['losangeles'] = {
  center: new google.maps.LatLng(34.052234, -118.243684),
  population: 3844829
};
*/
/*
citymap['hinman'] = {
  center: new google.maps.LatLng(42.050211, -87.675383),
  population: 0 //parseInt(hinmanpop)
};
citymap['isrc'] = {
  center: new google.maps.LatLng(42.050975, -87.675791),
  population: 1
};
citymap['crc'] = {
  center: new google.maps.LatLng(42.050975, -87.675791),
  population: 0
};
citymap['jones'] = {
  center: new google.maps.LatLng(42.050975, -87.675791),
  population: 0
};
//SHARC
citymap['shepherd'] = {
  center: new google.maps.LatLng(42.050975, -87.675791),
  population: 0
};
citymap['allison'] = {
  center: new google.maps.LatLng(42.05054, -87.678425),
  population: 7
};
citymap['parc'] = {
  center: new google.maps.LatLng(42.050963, -87.677979),
  population: 0
};
//WASH
citymap['willard'] = {
  center: new google.maps.LatLng(42.051672, -87.681493),
  population: 0
};
citymap['chapin'] = {
  center: new google.maps.LatLng(42.051031, -87.681262),
  population: 0
};
citymap['hobart'] = {
  center: new google.maps.LatLng(42.051804, -87.678902),
  population: 0
};
citymap['nmq'] = {
  center: new google.maps.LatLng(42.05182, -87.679814),
  population: 0
};
citymap['smq'] = {
  center: new google.maps.LatLng(42.051406, -87.679685),
  population: 0
};
citymap['1856orrington'] = {
  center: new google.maps.LatLng(42.051669, -87.68005),
  population: 0
};
citymap['rogers'] = {
  center: new google.maps.LatLng(42.05139, -87.679224),
  population: 0
};
//NE city
citymap['bobb'] = {
  center: new google.maps.LatLng(42.059581, -87.675526),
  population: 8
};
citymap['mcculloch'] = {
  center: new google.maps.LatLng(42.059906, -87.675523),
  population: 0
};
citymap['sargent'] = {
  center: new google.maps.LatLng(42.058743, -87.675447),
  population: 2
};
citymap['ccs'] = {
  center: new google.maps.LatLng(42.059282, -87.676692),
  population: 0
};
citymap['cci'] = {
  center: new google.maps.LatLng(42.060438, -87.675093),
  population: 0
};
citymap['slivka'] = {
  center: new google.maps.LatLng(42.060486, -87.675678),
  population: 0
};
//NW city
citymap['elder'] = {
  center: new google.maps.LatLng(42.061068, -87.67776),
  population: 0
};
var cityCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(42.055675,-87.676794),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Construct the circle for each value in citymap.
  // Note: We scale the population by a factor of 20.
  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: citymap[city].population * 10
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }
  */
//}

//google.maps.event.addDomListener(window, 'load', initialize);