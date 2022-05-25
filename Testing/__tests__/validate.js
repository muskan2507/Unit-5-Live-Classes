const validate = require("../src/index");
describe("validate function", function () {
  test("all consitions satisfied", function () {
    expect(validate("aa2eeeaA1").status).toBe(true);
    expect(validate("aa2eeeaA1").msg).toBe("pass is valid");
  });
});
describe("validate function", function () {
    test("less than 8 char will not pass", function () {
      expect(validate("aa2aA1").status).toBe(false);
      expect(validate("aa2aA1").msg).toBe("Min 8 Char Req");
    });
  });
  describe("validate function", function () {
    test("At least 1 low case is req", function () {
      expect(validate("AAAASSS2").status).toBe(false);
      expect(validate("AAAASSS2").msg).toBe("Min 1 low is Req");
    });
  });
  describe("validate function", function () {
    test("At least 1 num is req", function () {
      expect(validate("AAAASSSa").status).toBe(false);
      expect(validate("AAAASSSa").msg).toBe("Min 1 num is Req");
    });
  });
  describe("validate function", function () {
    test("At least 1 upp case is req", function () {
      expect(validate("1234567a").status).toBe(false);
      expect(validate("1234567a").msg).toBe("Min 1 upp is Req");
    });
  });
