const { PasswordVerifier } = require("./password-verifier");
const { makeFailingRule, makePassingRule } = require("../jest/makers");

describe(`${PasswordVerifier.name}`, () => {
  describe(`${PasswordVerifier.prototype.verify.name}`, () => {
    describe("with a failing rule", () => {
      const passwordVerifier = new PasswordVerifier();
      passwordVerifier.addRule(makeFailingRule("fake reason"));
      const errors = passwordVerifier.verify("failing rule");

      it("has an error message based on the rule reason", () => {
        expect(errors[0]).toContain("fake reason");
      });

      it("has exactly one error", () => {
        expect(errors.length).toBe(1);
      });
    });
    describe("with a passing rule", () => {
      const passwordVerifier = new PasswordVerifier();
      passwordVerifier.addRule(makePassingRule());
      const errors = passwordVerifier.verify("passing rule");

      it("has no errors", () => {
        expect(errors.length).toBe(0);
      });
    });

    describe("with a failing and a passing rule", () => {
      const passwordVerifier = new PasswordVerifier();
      passwordVerifier.addRule(makePassingRule());
      passwordVerifier.addRule(makeFailingRule("fake reason"));
      const errors = passwordVerifier.verify("passing rule");

      it("error text belongs to failed rule", () => {
        expect(errors[0]).toContain("fake reason");
      });
      it("has one error", () => {
        expect(errors.length).toBe(1);
      });
    });
  });

  describe(`${PasswordVerifier.prototype.addRule.name}`, () => {
    it("adds a rule", () => {
      const passwordVerifier = new PasswordVerifier();
      passwordVerifier.addRule("a rule");
      expect(passwordVerifier.rules).toEqual(["a rule"]);
    });
  });
});
