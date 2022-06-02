const trim = () => {
  let word = " FunctionUP    ";
  console.log(word.trim());
  return word.trim();
}

const changeToLowerCase = () => {
  let word = 'Jungle Book';
  word = word.toLowerCase();
  console.log(word);
  return word;
}

const changeToUpperCase = () => {
  let word = 'The Lion King';
  word = word.toUpperCase();
  console.log(word);
  return word;
}

module.exports.trim = trim;
module.exports.changeToLowerCase = changeToLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;