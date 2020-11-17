/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let letters = [];
  let digits = [];

  for (let log of logs) {
    if (isNaN(log.split(" ")[1])) {
      letters.push(log);
    } else {
      digits.push(log);
    }
  }

  letters.sort((a, b) => {
    if (a.substring(a.indexOf(" ")) > b.substring(b.indexOf(" "))) return 1;
    else if (a.substring(a.indexOf(" ")) < b.substring(b.indexOf(" ")))
      return -1;
    else {
      if (a > b) return 1;
      else return -1;
    }
  });

  return [...letters, ...digits];
};
