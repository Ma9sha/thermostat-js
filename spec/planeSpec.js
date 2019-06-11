describe("Plane", function() {
  it("can create an instance of plane", function() {
    var plane = new Plane();
    expect(plane instanceof Plane).toBe(true);
  });

  it("can be reported as flying", function() {
    var plane = new Plane();
    var output = plane.reportInFlight();
    expect(output).toBe(true);
  });
});
