function Airport(capacity = 5) {
  this.capacity = capacity;
  this.hanger = [];
}

Airport.prototype.land = function(plane){
  if (this.hanger.length >= this.capacity) {
    throw "hanger is full";
  }  
  this.hanger.push(plane);
  
}

Airport.prototype.takeOff = function () {
  this.hanger.pop();
};
