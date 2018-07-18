pragma solidity 0.4.24;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

/**
 * @title ERC721TokenMock
 * This mock just provides a public mint and burn functions for testing purposes,
 * and a public setter for metadata URI
 */
contract ChaincraftLandToken is ERC721Token {
    
    int16 constant PLOT_SIZE = 20;
    
    constructor() public ERC721Token("Chaincraft land token", "CLT")
    {

    }

    function claim(address _to, int128 _x, int128 _z) public {

        uint256 tokenId = coordsToPlotId(_x, _z);
        super._mint(_to, tokenId);
    }

    function burn(uint256 _tokenId) public {
        super._burn(ownerOf(_tokenId), _tokenId);
    }

    function setTokenURI(uint256 _tokenId, string _uri) public {
        super._setTokenURI(_tokenId, _uri);
    }




    //// UTILITY FUNCTIONS ////
    
    function coordsToPlotId (int128 _x, int128 _z) pure public returns (uint256 _plotId)
    {
        return pack(_x / PLOT_SIZE, _z / PLOT_SIZE);
    }

    function plotIdToCoords (uint256 _plotId) pure public returns (int128 _x, int128 _z)
    {
        (int128 _plotX, int128 _plotZ) = unpack(_plotId);
        int128 x = _plotX * PLOT_SIZE;
        int128 z = _plotZ * PLOT_SIZE;
        return (x, z);
    }

    // pack X & Z coordinates into a single uint256. X&Z can be +/- so need to convert from a signed int for packing
    // X - int128
    // Z - int128
    // uint256 packed = uint128 xCoords + uint128 zCoords  (shifted)
    // packed = XXXXXXXXXXZZZZZZZZ
    function pack (int128 _plotX, int128 _plotY) pure public returns (uint256 _packedPlot) {
        uint256 unsignedX = uint256(_plotX);
        uint128 unsignedZ = uint128(_plotY);
        uint256 shiftedX = unsignedX << 128;   // shift it over by int128 so we can pack it with another int128

        uint256 result = shiftedX + uint256(unsignedZ);
        return result;
    }

    // unpack X & Z coordinates out of the unsignged int
    function unpack (uint256 input) pure public returns (int128 _x, int128 _z) {
        uint128 unsignedX = uint128(input >> 128);  // bit shift to extract out the first half which are the X value   XXXX/~zzzz~
        uint128 unsignedZ = uint128(input); // converting the 256 to 128 will just truncate and take just the Z values   ~xxxx~/ZZZZ

        int128 _plotX = int128(unsignedX);
        int128 _plotZ = int128(unsignedZ);

        return (_plotX, _plotZ);
    }
}