// src/App.jsx
import QRScanner from "./components/QRScanner";

function App() {
  const handleScan = (data) => {
    alert("Đã quét được mã QR: " + data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Quét mã QR</h1>
      <QRScanner onScan={handleScan} />
    </div>
  );
}

export default App;
