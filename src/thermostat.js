function Thermostat (temp = 20) {
  this.temp = temp;
  const minvalue = 10;
  this._powerSaving = true;
}

Thermostat.prototype.tempUp = function(number){
  if ((this._tempTotal(this.temp, number) > 25) && (this._powerSaving == true)) {
    return this.temp = 25;
  }
  return this.temp += number;
}

Thermostat.prototype.tempDown = function(number){
  return this.temp -= number;
}

Thermostat.prototype.powerSavingMode = function(value=true){
  return this._powerSaving = value;
}

Thermostat.prototype._tempTotal = function(temp, increase) {
  return temp += increase;
}
