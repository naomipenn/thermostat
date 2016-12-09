$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

$('#temp-up').on('click', function() {
  thermostat.increase();
  updateTemperature();
});

$('#temp-down').click(function() {
  thermostat.decrease();
  updateTemperature();;
});

$('#temp-reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

$('#psm-on').click(function() {
  thermostat._isPowerSaveOn();
  $('#power-saving').text('on')
  updateTemperature();
})

// $('#psm-off').click(function() {
//   thermostat.powerSavingModeOff();
//   $('#power-saving').text('off')
//   updateTemperature();
// })

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
};

});
