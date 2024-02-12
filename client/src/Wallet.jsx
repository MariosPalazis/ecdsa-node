import server from "./server"
import {secp256k1} from "ethereum-cryptography/secp256k1.js";
import {toHex} from "ethereum-cryptography/utils";

function Wallet({ address, setAddress, balance, setBalance, priv, setPriv }) {
  async function onChange(evt) {
    const privKey = evt.target.value;
    setPriv(evt.target.value)
    const address = toHex(secp256k1.getPublicKey(privKey));
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet PrivateKey
        <input placeholder="Type the private key, for example:" value={priv} onChange={onChange}></input>
      </label>
      <div className="balance">Address: {address.slice(0,10)+'...'}</div>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
