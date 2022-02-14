const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when expected and actual are the same string", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals("abc", "abc")).not.toThrow();
    });
  });

  describe("when expected and actual are different strings", () => {
    it("throws an error", () => {
      expect(() => assertEquals("abcef", "abc")).toThrow(
        `Expected 'abcef' but found 'abc'`
      );
    });
  });

  describe("when expected and actual are the same number", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals(1, 1)).not.toThrow();
    });
  });

  describe("when expected and actual are different numbers", () => {
    it("throws an error", () => {
      expect(() => assertEquals(1, 2)).toThrow(`Expected 1 but found 2`);
    });
  });

  describe("when expected and actual are different types", () => {
    it("throws an error", () => {
      expect(() => assertEquals(1, "1")).toThrow(
        `Expected type number but found type string`
      );
    });
  });

  describe("when expected and actual are the same array", () => {
    it("returns without throwing an error", () => {
      expect(() =>
        assertEquals(["a", "b", "c"], ["a", "b", "c"])
      ).not.toThrow();
    });
  });

  describe("when expected and actual are different array lengths", () => {
    it("throws an error", () => {
      expect(() => assertEquals(["a", "b"], ["a", "b", "c"])).toThrow(
        `Expected array of length '2' but found '3'`
      );
    });
  });

  describe("when expected and actual are different array values", () => {
    it("throws an error", () => {
      expect(() => assertEquals(["a", "b"], ["a", "d"])).toThrow(
        `Expected 'b' but found 'd'`
      );
    });
  });
});
