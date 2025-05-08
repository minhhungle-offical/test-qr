// src/App.jsx
import { useState } from "react";
import QRScanner from "./components/QRScanner";

function App() {
  const [data, setData] = useState(null);
  const handleScan = (data) => {
    setData(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Quét mã QR</h1>
      <QRScanner onScan={handleScan} />
      <p>{data}</p>
    </div>
  );
}

export default App;
