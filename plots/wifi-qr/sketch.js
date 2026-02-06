import { initSketch } from '../../src/lib/sketchWrapper.js';
import QRCode from 'qrcode';

let qrMatrix = null;
const moduleSize = 10; // Size of each QR module

// Hatch spacing guide:
// 1px = very dense (slow plot)
// 2px = solid fill appearance
// 3-4px = visible line pattern
const hatchSpacing = 3;

// DZNQBIT: moduleSize = 10 / hatchSpacing = 3 works pretty well

// Generate QR code before setup
const wifiNetwork = 'brokeback';
const wifiPassword = 'ayunacroquetica'
const wifiString = `WIFI:T:WPA;S:${wifiNetwork};P:${wifiPassword};;`;

try {
  const qrCode = QRCode.create(wifiString, {
    errorCorrectionLevel: 'M',
  });
  console.log('Generated QR Code', qrCode);
  qrMatrix = qrCode.modules;
} catch (err) {
  console.error('QR Code generation failed:', err);
}

initSketch((p) => {
  p.background(255);

  if (!qrMatrix) {
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(16);
    p.fill(0);
    p.text('Loading QR code...', p.width / 2, p.height / 2);
    return;
  }

  console.log('Drawing QR matrix:', qrMatrix);

  // Calculate QR code dimensions
  const size = qrMatrix.size;
  const qrWidth = size * moduleSize;
  const qrHeight = size * moduleSize;

  // Center the QR code
  const startX = (p.width - qrWidth) / 2;
  const startY = (p.height - qrHeight) / 2;

  // Draw QR code modules with hatching
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const index = row * size + col;
      if (qrMatrix.data[index]) {
        const x = startX + col * moduleSize;
        const y = startY + row * moduleSize;

        // Draw horizontal hatch lines
        for (let ly = y; ly <= y + moduleSize; ly += hatchSpacing) {
          p.line(x, ly, x + moduleSize, ly);
        }
      }
    }
  }

  // Add label below QR code
  p.textAlign(p.CENTER);
  p.textSize(24);
  p.fill(0);
  // p.text('WiFi: skattebo', p.width / 2, startY + qrHeight + 40);
});
