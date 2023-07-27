/* eslint-disable @typescript-eslint/no-unused-vars */
declare module 'qr.js/lib/ErrorCorrectLevel' {
  const ErrorCorrectLevel: {
    L: number;
    M: number;
    Q: number;
    H: number;
  };
  export = ErrorCorrectLevel;
}

declare module 'qr.js/lib/QRCode' {
  import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';

  interface QRCodeOptions {
    typeNumber: number;
    errorCorrectLevel: number;
  }

  class QRCode {
    constructor(typeNumber: number, errorCorrectLevel: number);
    addData(data: string): void;
    make(): void;
    modules: boolean[][];
    static createStringToBytes(unicodeData: string, numChars: number): number[];
  }

  export = QRCode;
}
