const makeFailingRule = (reason) => () => ({ passed: false, reason });
const makePassingRule = (reason) => () => ({ passed: true, reason });

module.exports = { makeFailingRule, makePassingRule };
