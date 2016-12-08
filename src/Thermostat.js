var Thermostat = function() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.maxTemperature = 25;
  this._isPowerSaveOn = true;

};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};


Thermostat.prototype.increase = function() {
  if(this.temperature < this.maxTemperature)
  { return this.temperature += 1;}

};

Thermostat.prototype.decrease = function() {
  if(this.temperature > this.MIN_TEMPERATURE)
  { return this.temperature -= 1;}

};

Thermostat.prototype.changePowerSaveMode = function() {
  if(this._isPowerSaveOn = true) {
    this._isPowerSaveOn = false;
      this.maxTemperature = 32;
  } else {
    this._isPowerSaveOn = true;
    this.maxTemperature = 25;}
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
