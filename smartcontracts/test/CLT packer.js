var ChaincraftLandToken = artifacts.require("./ChaincraftLandToken.sol");

// TODO: these tests are just with different parameters. I should refactor it and extract out the duplicated lines

contract('Chaincraft land token pack/unpack functions', function (accounts) {

  it("should pack 0,0", async () => {
    var x = 0;
    var z = 0;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(x, back[0]);
    assert.equal(z, back[1]);
  });

  it("should pack +X", async () => {
    var x = 1;
    var z = 0;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(x, back[0].valueOf());
  });

  it("should pack -X", async () => {
    var x = -1;
    var z = 0;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(x, back[0].valueOf());
  });

  it("should pack +Z", async () => {
    var x = 0;
    var z = 1;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(z, back[1].valueOf());
  });

  it("should pack -Z", async () => {
    var x = 0;
    var z = -1;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(z, back[1].valueOf());
  });

  it("should pack +X,+Z", async () => {
    var x = 1;
    var z = 1;
    
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(x, back[0].valueOf());
    assert.equal(z, back[1].valueOf());
  });

  it("should pack +X,-Z", async () => {
    var x = 1;
    var z = -1;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(x, back[0].valueOf());
    assert.equal(z, back[1].valueOf());
  });
  
  it("should pack -X,+Z", async () => {
    var x = -1;
    var z = 1;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(x, back[0].valueOf());
    assert.equal(z, back[1].valueOf());
  });

  it("should pack -X,-Z", async () => {
    var x = -1;
    var z = -1;
    var instance = await ChaincraftLandToken.deployed();
    var concat = await instance.pack(x, z);

    var back = await instance.unpack(concat);

    assert.equal(x, back[0].valueOf());
    assert.equal(z, back[1].valueOf());
  });

});