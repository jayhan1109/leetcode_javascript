/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let arr = paragraph.toLowerCase().split(/[^a-z]/);

  let counter = {};

  for (let word of arr) {
    if (word == "" || banned.includes(word)) continue;

    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }

  console.log(counter);

  return Object.keys(counter).sort((a, b) => counter[b] - counter[a])[0];
};
