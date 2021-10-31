const { oneUpperCaseRule } = require("./password-rules");
describe("Upper case rule", () => {
  test("given no uppercase, it fails", () => {
    const result = oneUpperCaseRule("abc");
    expect(result).toBeFalsy();
  });
  test.each(["Abc", "aBc"])("given %s, it passes", (input) => {
    const result = oneUpperCaseRule(input);
    expect(result).toBeTruthy();
  });
});
