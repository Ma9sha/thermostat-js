function Thermostat (startvalue = 20) {
  this.startvalue = startvalue;
  const minvalue = 10;
}

Thermostat.prototype.tempUp = function(number){
  return this.startvalue + number;
}

Thermostat.prototype.tempDown = function(number){
  return this.startvalue - number;
}
