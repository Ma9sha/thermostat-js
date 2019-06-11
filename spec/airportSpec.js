describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("can create an instance of airport", function() {
    expect(airport instanceof Airport).toBe(true);
  });

  it("can hold a capacity of 5 planes", function() {
    expect(airport.capacity).toEqual(5);
  });

  it("can hold multiple planes", function(){
    expect(airport.hanger).toEqual([]);
  })

  it("can respond to a land method", function(){
    expect(airport.land).toBeDefined();
  })

  it("can add plane to hanger", function(){
    airport.land('plane');
    expect(airport.hanger.length).toEqual(1)

  })
});
