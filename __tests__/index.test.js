const { encodeAsciiToCp037, decodeCp037ToAscii } = require("../src/index");

describe("cp037-converter", () => {
  test("should encode and decode simple string", () => {
    const str = "HELLO";
    const encoded = encodeAsciiToCp037(str);
    const decoded = decodeCp037ToAscii(encoded);
    expect(decoded).toBe(str);
  });

  test("should handle unknown characters with fallback ?", () => {
    const encoded = encodeAsciiToCp037("🙂");
    const decoded = decodeCp037ToAscii(encoded);
    expect(typeof decoded).toBe("string");
  });

  test("should decode known buffer values correctly", () => {
    const buffer = Buffer.from([0xc8, 0xc5, 0xd3, 0xd3, 0xd6]); // H E L L O in cp037
    const result = decodeCp037ToAscii(buffer);
    expect(result).toBe("HELLO");
  });
});
