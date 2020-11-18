/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let list = new ListNode(0, null);
  let node = list;
  let carry = 0;

  while (l1 || l2 || carry) {
    let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = num >= 10 ? 1 : 0;
    num %= 10;

    node.next = new ListNode(num, null);
    node = node.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return list.next;
};
