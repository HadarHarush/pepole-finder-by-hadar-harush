export default {
  isIncludesStr,
  isStringsIncludesString,
  getFullNameFromUser,
};

function isIncludesStr(bigString, smallString) {
  return bigString.toLowerCase().includes(smallString.toLowerCase());
}

function isStringsIncludesString(strings, string) {
  return strings.some((currString) => isIncludesStr(currString, string));
}

function getFullNameFromUser({ name: { title, first, last } }) {
  return [title, first, last].join(" ");
}
