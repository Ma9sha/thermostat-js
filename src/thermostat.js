function Thermostat (startvalue = 20) {
  this.startvalue = startvalue;
  const minvalue = 10;
  this._powerSaving = true;
}

Thermostat.prototype.tempUp = function(number){
  return this.startvalue + number;
}

Thermostat.prototype.tempDown = function(number){
  return this.startvalue - number;
}

Thermostat.prototype.powerSavingMode = function(value=true){
  return this._powerSaving = value;
}
