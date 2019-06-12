describe ("Thermostat", function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("can create an instance of thermostat", function(){
    expect(thermostat instanceof Thermostat).toBe(true)
  });

  it("it can have a start temperature", function(){
    expect(thermostat.temp).toEqual(20)
  });

  describe("#tempUp", function() {
    it("it can raise temerature", function(){
      startval = thermostat.temp
      output = thermostat.tempUp(1)
      expect(output).toEqual(startval+1)
    });

    it("can set max temp (powerSavingMode On)", function() {
      thermostat.tempUp(10)
      expect(thermostat.temp).toEqual(25);
    });

    it("can set max temp (powerSavingMode Off)", function() {
      thermostat.powerSavingMode(false)
      thermostat.tempUp(15)
      expect(thermostat.temp).toEqual(32);
    });

  });

  describe("#tempDown", function() {
    it("it can decrease temperature", function(){
      startval = thermostat.temp
      output = thermostat.tempDown(1)
      expect(output).toEqual(startval-1)
    });
  });

  describe("#powerSavingMode", function() {
    it("it check if power saving mode is on by default", function(){
      thermostat.powerSavingMode();
      expect(thermostat._powerSaving).toBe(true)
    });
  });

  describe("#reset", function() {
    it("can reset to default temp", function(){
      thermostat.tempUp(3)
      thermostat.reset()
      expect(thermostat.temp).toEqual(20)
    });
  });

});
