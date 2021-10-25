const {
  PasswordVerifier,
} = require("../02_a_first_unit_test/password-verifier.js");

const makeFailingRule = (reason) => () => ({ passed: false, reason });
const makePassingRule = (reason) => () => ({ passed: true, reason });

function makeVerifierWithFailingRule() {
  const passwordVerifier = new PasswordVerifier();
  passwordVerifier.addRule(makeFailingRule("fake reason"));
  return passwordVerifier;
}

function makerVerifierWithPassingRule() {
  const passwordVerifier = new PasswordVerifier();
  passwordVerifier.addRule(makePassingRule());
  return passwordVerifier;
}

function makeVerifierWithFailingAndPassingRule() {
  const passwordVerifier = new PasswordVerifier();
  passwordVerifier.addRule(makePassingRule());
  passwordVerifier.addRule(makeFailingRule("fake reason"));
  return passwordVerifier;
}

module.exports = {
  makeFailingRule,
  makePassingRule,
  makeVerifierWithFailingAndPassingRule,
  makeVerifierWithFailingRule,
  makerVerifierWithPassingRule,
};
