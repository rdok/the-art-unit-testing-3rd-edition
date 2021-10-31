function oneUpperCaseRule(input) {
  return (
    [...input].find((character) => {
      return character.toUpperCase() === character;
    }) !== undefined
  );
}

module.exports = { oneUpperCaseRule };
