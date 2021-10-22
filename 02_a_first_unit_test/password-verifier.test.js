const { verifyPassword } = require("./password-verfier");

describe(`${verifyPassword.name}`, () => {
  describe("with alpha failing rule", () => {
    it(`returns errors`, () => {
      const fakeRule = () => ({ passed: false, reason: "fake reason" });
      const errors = verifyPassword("any rule", [fakeRule]);
      expect(errors[0]).toContain("fake reason");
    });
  });
});
