function Airport(capacity = 5) {
  this.capacity = capacity;
  this.hanger = [];
}

Airport.prototype.land = function(plane){
  this.hanger.push(plane);
}
