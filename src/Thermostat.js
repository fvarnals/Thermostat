function Thermostat() {
  this._temperature = 20;
  this._maxTemperature = 25;
  this._powerSavingMode = true;
};
Thermostat.prototype.getCurrentTemp = function() {
  return this._temperature;
};

Thermostat.prototype.changeTemp = function(value) {
  this._temperature = value;
};

Thermostat.prototype.increase = function() {
  if (this.getCurrentTemp() === this._maxTemperature) {
    throw new Error(`cannot increase the temperature above ${this._maxTemperature}`)
  }
  this._temperature += 1;
};

Thermostat.prototype.decrease = function() {
  if (this.getCurrentTemp() === 10) {
    throw new Error('cannot decrease the temperature below 10');
  }
  this._temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this._temperature = 20
};

Thermostat.prototype.currentUsage = function() {
  if (this.getCurrentTemp() < 18) {
    return 'low-usage';
  } else if ((this.getCurrentTemp() >= 18) && (this.getCurrentTemp() <= 25)) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  };
};

Thermostat.prototype.powerSavingModeOn = function() {
  this._powerSavingMode = true;
  this._maxTemperature = 25;
  this._temperature = 25;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this._powerSavingMode = false;
  this._maxTemperature = 35;
};

Thermostat.prototype.powerSavingMode = function() {
  return this._powerSavingMode
};

Thermostat.prototype.PSM = function() {
  if (this._powerSavingMode) {
    return 'PSMON'
  } else
  return 'PSMOFF'
};
