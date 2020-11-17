/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = {};
  let resultArr = [];

  strs.forEach((str) => {
    let sortedStr = str.split("");
    sortedStr = sortedStr.sort();
    sortedStr = sortedStr.join("");

    if (result[sortedStr]) {
      result[sortedStr].push(str);
      result[sortedStr].sort();
    } else {
      result[sortedStr] = [str];
    }
  });

  for (let s in result) {
    resultArr.push(result[s]);
  }

  return resultArr;
};
