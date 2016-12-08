var Thermostat = function() {
  this.temperature = 20;
  this._minTemperature = 10;
};


Thermostat.prototype.increase = function() {
  this.temperature += 1;

};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;

};
