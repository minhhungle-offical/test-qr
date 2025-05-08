// src/components/QRScanner.jsx
import { useEffect, useRef } from "react";
import QrScanner from "qr-scanner";

export default function QRScanner({ onScan }) {
  const videoRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    QrScanner.WORKER_PATH = "/qr-scanner-worker.min.js";

    if (videoRef.current) {
      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result.data);
          scanner.stop(); // Dừng sau khi quét
        },
        {
          highlightScanRegion: true,
          returnDetailedScanResult: true,
        }
      );

      scannerRef.current = scanner;
      scanner.start();
    }

    return () => {
      scannerRef.current?.stop();
    };
  }, [onScan]);

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", maxWidth: "500px", border: "1px solid #ccc" }}
      muted
      playsInline
    />
  );
}
