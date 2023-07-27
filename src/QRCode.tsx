/* eslint-disable react-refresh/only-export-components */
// QRCode.tsx
import QRCodeImpl from "qr.js/lib/QRCode";
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";
import React, { forwardRef, ForwardedRef } from "react";
import QRCodeSvg from "./QRCodeSvg";

interface QRCodeProps {
  bgColor?: string | Record<string, string>;
  fgColor?: string | Record<string, string>;
  level?: keyof typeof ErrorCorrectLevel;
  size?: number;
  value: string;
}

const QRCode: React.ForwardRefRenderFunction<SVGSVGElement, QRCodeProps> = (
  { bgColor = "#FFFFFF", fgColor = "#000000", level = "L", size = 256, value, ...props },
  ref: ForwardedRef<SVGSVGElement>
) => {
  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(value);
  qrcode.make();
  const cells = qrcode.modules;

  return (
    <QRCodeSvg
      {...props}
      bgColor={bgColor}
      bgD={cells
        .map((row, rowIndex) =>
          row.map((cell, cellIndex) => (!cell ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z` : "")).join(" ")
        )
        .join(" ")}
      fgColor={fgColor}
      fgD={cells
        .map((row, rowIndex) =>
          row.map((cell, cellIndex) => (cell ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z` : "")).join(" ")
        )
        .join(" ")}
      ref={ref}
      size={size}
      viewBoxSize={cells.length}
    />
  );
};

QRCode.displayName = "QRCode";

export default forwardRef<SVGSVGElement, QRCodeProps>(QRCode);
