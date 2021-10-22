const { verifyPasswordFn } = require("./password-verfier-fn");

describe(`${verifyPasswordFn.name}`, () => {
  describe("with alpha failing rule", () => {
    it(`returns errors`, () => {
      const fakeRule = () => ({ passed: false, reason: "fake reason" });
      const errors = verifyPasswordFn("any rule", [fakeRule]);
      expect(errors[0]).toContain("fake reason");
    });
  });
});
