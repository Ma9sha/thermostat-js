function Plane() {
  this._flying = false;
}

Plane.prototype.reportInFlight = function() {
  return this._flying = true;
}

// Plane.prototype._flying = function(){
//   return this._flying;
// }

Plane.prototype.isflying = function(){
  return this._flying;
}
