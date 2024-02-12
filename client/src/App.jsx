import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [priv, setPriv] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        priv = {priv}
        setPriv = {setPriv}
      />
      <Transfer setBalance={setBalance} address={address} priv = {priv} />
    </div>
  );
}

export default App;
