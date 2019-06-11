function Plane() {
  this._flying = false;
}

Plane.prototype.reportInFlight = function() {
  return this._flying = true;
}
