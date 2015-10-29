function getWeather() {
  function success(position) {
    updateWeather(position.coords.latitude+','+position.coords.longitude);
  }
  function error() {
    updateWeather("Amsterdam");
    //52.3667° N, 4.9000° E
  }
  if (!navigator.geolocation) {
    error();
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

function updateWeather(location) {
  console.log(location);
  $.simpleWeather({
    location: location,
    unit: 'c',
    success: function(weather) {
      console.log(weather);
      // html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      // html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      // html += '<li class="currently">'+weather.currently+'</li>';
      // html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
      
      // $("#weather").html(html);
      
      console.log(weather.temp);
      
      if(weather.temp > 24) {
        $('html').animate({backgroundColor: '#F7AC57'}, 1500);
      } else {
        $('html').animate({backgroundColor: '#893483'}, 1500);
      }
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

$(document).ready(function() {
  getWeather();
});