/// Assumes you are running `truffle develop` in another terminal window
var Web3 = require("web3");

// import the HD wallet for the admin (using the truffle develop default)
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
    var rpcEndpoint = "http://127.0.0.1:9545";
    var rwgWallet = new HDWalletProvider(mnemonic, rpcEndpoint, 0); // unlock account 0
    console.log("Wallet address: " + rwgWallet.addresses[0]);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Wallet address: " + rwgWallet.addresses[0]
    };

    context.done();
};
