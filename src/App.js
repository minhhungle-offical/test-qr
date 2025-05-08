import { useState } from "react";
import QRScanner from "./components/QRScanner";

export default function App() {
  const [scannedData, setScannedData] = useState(null);
  const [scanAgain, setScanAgain] = useState(false);

  const handleScan = (data) => {
    setScannedData(data);
    setScanAgain(false); // Dừng scanner
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Quét mã QR</h1>

      {!scannedData || scanAgain ? (
        <QRScanner onScan={handleScan} />
      ) : (
        <div>
          <p>
            ✅ Đã quét được: <b>{scannedData}</b>
          </p>
          <button onClick={() => setScanAgain(true)}>🔄 Quét lại</button>
        </div>
      )}
    </div>
  );
}
