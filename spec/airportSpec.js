describe("Airport", function() {
  it("can create an instance of airport", function() {
    var airport = new Airport();
    expect(airport instanceof Airport).toBe(true);
  });
});
