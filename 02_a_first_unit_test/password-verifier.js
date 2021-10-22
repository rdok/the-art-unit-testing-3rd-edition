class PasswordVerifier {
  constructor() {
    this.rules = [];
  }

  verify(input) {
    const errors = [];
    this.rules.forEach((rule) => {
      const result = rule(input);
      if (!result.passed) {
        errors.push(`error ${result.reason}`);
      }
    });
    return errors;
  }

  addRule(rule) {
    this.rules.push(rule);
  }
}

module.exports = { PasswordVerifier };
