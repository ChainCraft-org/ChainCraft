var BigNumber = require('bignumber.js');

var ChaincraftLandToken = artifacts.require("./ChaincraftLandToken.sol");

// TODO: these tests are just with different parameters. I should refactor it and extract out the duplicated lines

contract('Chaincraft land token plot mapper', function (accounts) {

  it("should map world 0,0 to correct plotId", async () => {
    var x = 0;
    var z = 0;
    var instance = await ChaincraftLandToken.deployed();
    var plotId = await instance.coordsToPlotId(x, z);

    assert.equal(plotId, 0);
  });

  it("should map world 0,21 to correct plotId", async () => {
    var x = 0;
    var z = 21;
    var instance = await ChaincraftLandToken.deployed();
    var plotId = await instance.coordsToPlotId(x, z);

    assert.equal(plotId, 1);
  });

  it("should map world 0,31 to correct plotId", async () => {
    var x = 0;
    var z = 31;
    var instance = await ChaincraftLandToken.deployed();
    var plotId = await instance.coordsToPlotId(x, z);

    assert.equal(plotId, 1);
  });

  it("should map world 21,0 to correct plotId", async () => {
    var x = 21;
    var z = 0;
    var expected = BigNumber(2).pow(128);

    var instance = await ChaincraftLandToken.deployed();
    var plotId = await instance.coordsToPlotId(x, z);

    assert.equal(plotId.toString(), expected.toString());
  });

});