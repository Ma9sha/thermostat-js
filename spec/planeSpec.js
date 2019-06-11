describe("Plane", function() {
  it("can create an instance of plane", function() {
    var plane = new Plane();
    expect(plane instanceof Plane).toBe(true);
  });

  it("tests for default value for flying", function(){
    var plane = new Plane();
    expect(plane._flying).toBe(false);
  });

  it("can be reported as flying", function() {
    var plane = new Plane();
    var output = plane.reportInFlight();
    expect(output).toBe(true);
  });

  it("checks whether the plane is inflight", function() {
    var plane = new Plane();
    plane.reportInFlight();
    expect(plane.isflying()).toBe(true)
  });
});
