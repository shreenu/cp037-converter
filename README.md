# cp037-converter

Convert between ASCII and EBCDIC CP037 (IBM037) encoding.

## Install

```bash
npm i @shreenu21/cp037-converter
```

## Install

```bash
const {
  encodeAsciiToCp037,
  decodeCp037ToAscii,
} = require("@shreenu21/cp037-converter");

const encoded = encodeAsciiToCp037("HELLO");
const decoded = decodeCp037ToAscii(encoded);

console.log(decoded); // "HELLO"
```
