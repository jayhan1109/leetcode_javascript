/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let p = 0;
  let q = s.length - 1;

  while (p < q) {
    if (s[p] !== s[q]) {
      return false;
    }

    p++;
    q--;
  }

  return true;
};
