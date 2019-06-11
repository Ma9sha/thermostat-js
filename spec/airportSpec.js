describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("can create an instance of airport", function() {
    expect(airport instanceof Airport).toBe(true);
  });

  it("can hold a capacity of 5 planes", function() {
    expect(airport._capacity).toEqual(5);
  });
});
