function Plane() {
  this.flying = false;
}

Plane.prototype.reportInFlight = function() {
  return this.flying = true;
}

Plane.prototype.isflying = function(){
  return this.flying;
}
