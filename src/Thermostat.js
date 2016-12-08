var Thermostat = function() {
  this.temperature = 20;
  this._minTemperature = 10;
  this._maxTemperature = 25;
  this._isPowerSaveOn = true;

};


Thermostat.prototype.increase = function() {
  this.temperature += 1;

};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;

};

Thermostat.prototype.changePowerSaveMode = function() {
  if(this._isPowerSaveOn = true) {
    this._isPowerSaveOn = false;
      this._maxTemperature = 32;
  } else {
    this._isPowerSaveOn = true;
    this._maxTemperature = 25;}
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;

};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18)
    {return "low-usage";}
  else if(this.temperature < 25)
    {return "medium-usage";}
  else
    {return "high-usage";}
};
