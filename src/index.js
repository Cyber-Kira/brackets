module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let openBrackets = bracketsConfig.map((item) => item[0]);
  str = str.split("");

  for (let i = 0; i < str.length; i += 1) {
    if (
      openBrackets.includes(str[i]) &&
      !isPaired(str[i], arr, bracketsConfig)
    ) {
      arr.push(str[i]);
    } else if (isPaired(str[i], arr, bracketsConfig)) {
      arr.pop();
    } else {
      return false;
    }
  }
  if (arr.length === 0) {
    return true;
  }
  return false;
};

const isPaired = (currentBracket, bracketsArr, configArr) => {
  for (let i = 0; i < configArr.length; i += 1) {
    if (
      configArr[i][1] === currentBracket &&
      configArr[i][0] === bracketsArr[bracketsArr.length - 1]
    ) {
      return true;
    }
  }
  return false;
};
