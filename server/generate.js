const { secp256k1 } =require("ethereum-cryptography/secp256k1.js");
const { keccak256 } =require("ethereum-cryptography/keccak.js");
const {toHex} =require("ethereum-cryptography/utils");

// const generatePrivKey = secp256k1.utils.randomPrivateKey();
// console.log(toHex(generatePrivKey))
// const publicKey = secp256k1.getPublicKey(generatePrivKey);
// console.log(toHex(publicKey))
// function getAddress(publicKey) {
//     const removedbit = publicKey.slice(1, publicKey.length);
//     const hashed = keccak256(removedbit);
//     return hashed.slice(-20, hashed.length);
// }
// console.log("0x"+toHex(getAddress(publicKey)))