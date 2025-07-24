# cp037-converter

Convert between ASCII and EBCDIC CP037 (IBM037) encoding.

## Install

```bash
npm install cp037-converter
```

## Install

```bash
import { encodeAsciiToCp037, decodeCp037ToAscii } from 'cp037-converter';

const encoded = encodeAsciiToCp037("HELLO");
const decoded = decodeCp037ToAscii(encoded);

console.log(decoded); // "HELLO"
```
