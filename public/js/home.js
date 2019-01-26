// Initialize and add the map
function initMap() {
  // The location of Uluru
  var libertyU = {lat: 37.35242 , lng: -79.18018};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: libertyU});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: libertyU, map: map});
}
