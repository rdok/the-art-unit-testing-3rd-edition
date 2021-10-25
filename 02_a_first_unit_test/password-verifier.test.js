const { PasswordVerifier } = require("./password-verifier");
const {
  makeVerifierWithFailingRule,
  makerVerifierWithPassingRule,
  makeVerifierWithFailingAndPassingRule,
} = require("../jest/password-verifier-factory");

describe(`${PasswordVerifier.name}.${PasswordVerifier.prototype.verify.name}`, () => {
  describe("with a failing rule", () => {
    it("has an error message based on the rule reason", () => {
      const passwordVerifier = makeVerifierWithFailingRule();
      const errors = passwordVerifier.verify("failing rule");
      expect(errors[0]).toContain("fake reason");
    });

    it("has exactly one error", () => {
      const passwordVerifier = makeVerifierWithFailingRule();
      const errors = passwordVerifier.verify("failing rule");
      expect(errors.length).toBe(1);
    });
  });
  describe("with a passing rule", () => {
    it("has no errors", () => {
      const passwordVerifier = makerVerifierWithPassingRule();
      const errors = passwordVerifier.verify("passing rule");
      expect(errors.length).toBe(0);
    });
  });

  describe("with a failing and a passing rule", () => {
    it("error text belongs to failed rule", () => {
      const passwordVerifier = makeVerifierWithFailingAndPassingRule();
      const errors = passwordVerifier.verify("passing rule");
      expect(errors[0]).toContain("fake reason");
    });
    it("has one error", () => {
      const passwordVerifier = makeVerifierWithFailingAndPassingRule();
      const errors = passwordVerifier.verify("passing rule");
      expect(errors.length).toBe(1);
    });
  });
});

describe(`${PasswordVerifier.name}.${PasswordVerifier.prototype.addRule.name}`, () => {
  it("adds a rule", () => {
    const passwordVerifier = new PasswordVerifier();
    passwordVerifier.addRule("a rule");
    expect(passwordVerifier.rules).toEqual(["a rule"]);
  });
});
