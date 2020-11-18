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
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  let odd = head;
  let even = head.next;
  let firstEven = even;

  while (true) {
    odd.next = odd.next.next;
    odd = odd.next;
    if (!odd.next) {
      even.next = null;
      break;
    }

    even.next = even.next.next;
    even = even.next;
    if (!even.next) break;
  }

  console.log(head);
  console.log(firstEven);

  odd.next = firstEven;

  return head;
};
