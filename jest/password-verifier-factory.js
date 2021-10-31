const {
  PasswordVerifier,
} = require("../02_a_first_unit_test/password-verifier.js");

const makeFailingRule = (reason) => () => ({ passed: false, reason });
const makePassingRule = (reason) => () => ({ passed: true, reason });

function makeVerifierWithFailingRule() {
  const passwordVerifier = makeVerifier();
  passwordVerifier.addRule(makeFailingRule("fake reason"));
  return passwordVerifier;
}

function makerVerifierWithPassingRule() {
  const passwordVerifier = makeVerifier();
  passwordVerifier.addRule(makePassingRule());
  return passwordVerifier;
}

function makeVerifier() {
  return new PasswordVerifier();
}

function makeVerifierWithFailingAndPassingRule() {
  const passwordVerifier = makeVerifier();
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
  makeVerifier,
};
