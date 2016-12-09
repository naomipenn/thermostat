$( document ).ready(function() {
  var thermostat = new Thermostat();

  refresh();

  // displayWeather('London');
  //
  // $('#select-city').submit(function(event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   displayWeather(city);
  // })
  // })

  $("#temperature-up").click(function( event ) {
    thermostat.up()
    refresh();
  });

  $("#temperature-down").click(function( event ) {
    thermostat.down()
    refresh();
  });

  $("#temperature-reset").click(function( event ) {
    thermostat.resetTemperature()
    refresh();
  });

  $("#powersavingmode").click(function( event ) {
    thermostat.switchPowerSavingMode();
    refresh();
  });

  $("#table").fadeIn(3000);

  function psmStatus() {
    if (thermostat.isInPowerSavingMode === true) {
      return "On";
    } else {
      return "Off";
    }
  }

  function refresh() {
    $("#temperature").text(thermostat.temperature);
    $("#energy-usage").text(thermostat.currentEnergyUsage());
    $("#energy-usage").attr('class', thermostat.currentEnergyUsage());
    $("#psm-status").text(psmStatus());
    $("#psm-status").attr('class', psmStatus());
  }

  // function displayWeather(city) {
  //  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //  var token = '&appid=fe1adac7152aa9980cc789467d7ac0f7';
  //  var units = '&units=metric';
  //  $.get(url + token + units, function(data) {
  //    $('#current-temperature').text(data.main.temp);
  //  })


});
