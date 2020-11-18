/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let temp;
  let prev = new ListNode(0, null);
  let res = prev;
  prev.next = head;
  node = head;
  next = head.next;

  while (true) {
    temp = next.next || null;
    prev.next = next;
    next.next = node;
    node.next = temp;

    if (!temp || !temp.next) break;
    else {
      prev = node;
      node = temp;
      next = temp.next;
    }
  }

  return res.next;
};
