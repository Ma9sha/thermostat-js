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
  });

  describe("#land", function() {
    it("can respond to a land method", function(){
      expect(airport.land).toBeDefined();
    });

    it("can add plane to hanger", function(){
      airport.land('plane');
      expect(airport.hanger.length).toEqual(1)
    });
  });

  describe("#takeOff", function() {
    it("can respond to a takeOff method", function() {
      expect(airport.takeOff).toBeDefined();
    });

    it("can remove a plane from hanger", function() {
      airport.land('plane1');
      airport.takeOff();
      expect(airport.hanger.length).toEqual(0)
    });
  });

  describe("#isfull", function(){
    it("checks if the hanger is full?", function(){
      for(i=1; i<=5; i++)
      {
        airport.land('plane' +i);
      }
      expect(function() {airport.land('plane6')}).toThrow(new Error("hanger is full"));
    })
  })
});
