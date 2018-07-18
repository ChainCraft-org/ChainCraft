var ChaincraftLandToken = artifacts.require("./ChaincraftLandToken.sol");

// TODO: these tests are just with different parameters. I should refactor it and extract out the duplicated lines

contract('Chaincraft land token mining', function (accounts) {


  it("should create a token for user for unclaimed plot", async () => {
    var owner = 0x123;
    var x = 1;
    var z = 1;

    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.claim(owner, x, z);

    // calculate what the plotId should be, so we can look it up
    var plotId = await instance.coordsToPlotId(x, z);
    var plotOwner = await instance.ownerOf(plotId);

    assert.equal(plotOwner, owner);
  });


});