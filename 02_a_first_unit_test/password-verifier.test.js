const { PasswordVerifier } = require("./password-verifier");

describe(`${PasswordVerifier.name}`, () => {
  describe(`${PasswordVerifier.prototype.verify.name}`, () => {
    describe("with a failing rule", () => {
      const passwordVerifier = new PasswordVerifier();
      const fakeRule = () => ({ passed: false, reason: "fake reason" });

      passwordVerifier.addRule(fakeRule);
      const errors = passwordVerifier.verify("failing rule", [fakeRule]);

      it("has an error message based on the rule reason", () => {
        expect(errors[0]).toContain("fake reason");
      });

      it("has exactly one error", () => {
        expect(errors.length).toBe(1);
      });
    });
  });

  describe(`${PasswordVerifier.prototype.addRule.name}`, () => {
    it(`adds a rule`, () => {
      const passwordVerifier = new PasswordVerifier();
      passwordVerifier.addRule("a rule");
      expect(passwordVerifier.rules).toEqual(["a rule"]);
    });
  });
});
