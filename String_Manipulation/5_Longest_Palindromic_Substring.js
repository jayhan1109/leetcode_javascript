/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxP = "";

  if (s.length < 2) return s;

  for (let i = 0; i < s.length - 1; i++) {
    checkPalindrome(i, i);
    checkPalindrome(i, i + 1);
  }

  function checkPalindrome(left, right) {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      // Check max palindrome
      if (maxP.length < right - left + 1) {
        maxP = s.slice(left, right + 1);
      }

      // Increase , decrease right, left
      left--;
      right++;
    }
  }

  return maxP;
};
