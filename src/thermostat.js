function Thermostat (temp = 20) {
  this.temp = temp;
  const minvalue = 10;
  this._powerSaving = true;
}

Thermostat.prototype.tempUp = function(number){
  if ((this._tempTotal(this.temp, number) > 25) && (this._powerSaving == true)) {
    return this.temp = 25;
  } else if ((this._tempTotal(this.temp, number) > 32) && (this._powerSaving == false)) {
    return this.temp = 32;
  } else {
  return this.temp += number;
  }
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

Thermostat.prototype.reset = function () {
  this.temp = 20;
};

Thermostat.prototype.energyUsage = function() {
  var t = this.temp;

  switch (true) {
    case t < 18:
      return "low-usage";
      break;
    case t >= 25:
      return "high-usage";
      break;
    default:
      return "medium-usage";
      break;
  }
};
