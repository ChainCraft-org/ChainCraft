pragma solidity 0.4.24;


// contract Math {

//         // Int16 -- (-32,768 to +32,767)
//         // Int32 -- (-2,147,483,648 to +2,147,483,647)
//         // Int64 -- (-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807)
//         // Int 128  (−170,141,183,460,469,231,731,687,303,715,884,105,728 to +170,141,183,460,469,231,731,687,303,715,884,105,72)
//         // Int 256
//         // uint128 = int128 + int128.min
//         // uint256   = uint128 + uint128

//         // pack X & Z coordinates into a single uint256. X&Z can be +/- so need to convert from a signed int for packing
//         // X - int128
//         // Z - int128
//         // uint256 packed = uint128 xCoords + uint128 zCoords  (shifted)
//         // packed = XXXXXXXXXXZZZZZZZZ

//     function pack (int128 X, int128 Z) pure public returns (uint256) {
//         uint256 unsignedX = uint256(X);
//         uint128 unsignedZ = uint128(Z);
//         uint256 shiftedX = unsignedX << 128;   // shift it over by int128 so we can pack it with another int128

//         uint256 result = shiftedX + uint256(unsignedZ);
//         return result;
//     }

//     function unpack (uint256 input) pure public returns (int128 X, int128 Z) {
//         uint128 unsignedX = uint128(input >> 128);  // take the first 128bits which represent
//         uint128 unsignedZ = uint128(input);

//         int128 signedX = int128(unsignedX);
//         int128 signedZ = int128(unsignedZ);

//         return (signedX, signedZ);
//     }

// }
