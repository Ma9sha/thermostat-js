describe ("Thermostat", function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("can create an instance of thermostat", function(){
    expect(thermostat instanceof Thermostat).toBe(true)
  })

  it("it can have a start temperature", function(){
    expect(thermostat.startvalue).toEqual(20)
  })

  it("it can raise temerature", function(){
    startval = thermostat.startvalue
    output = thermostat.tempUp(1)
    expect(output).toEqual(startval+1)
  })

  it("it can decrease temperature", function(){
    startval = thermostat.startvalue
    output = thermostat.tempDown(1)
    expect(output).toEqual(startval-1)
  })
})