var Thermostat = function() {
  this.temperature = 20;
  this._minTemperature = 10;
  this._maxTemperature = 25;
};


Thermostat.prototype.increase = function() {
  this.temperature += 1;

};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;

};

Thermostat.prototype.turnPowerSavingOff = function() {
  this._maxTemperature = 32;
};
