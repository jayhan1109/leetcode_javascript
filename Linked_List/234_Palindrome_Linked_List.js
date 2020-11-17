var isPalindrome = function (head) {
  if (!head) return true;

  let node = head;
  let arr = [];

  while (node.next) {
    arr.push(node.val);
    node = node.next;
  }

  arr.push(node.val);

  let p = 0;
  let q = arr.length - 1;

  while (p < q) {
    if (arr[p] !== arr[q]) return false;
    p++;
    q--;
  }

  return true;
};
