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
var mergeTwoLists = function (l1, l2) {
  let list = new ListNode(0, null);
  let oneNode = l1;
  let twoNode = l2;
  let node = list;

  while (oneNode !== null && twoNode !== null) {
    if (oneNode.val < twoNode.val) {
      node.next = new ListNode(oneNode.val, null);
      node = node.next;
      oneNode = oneNode.next;
    } else {
      node.next = new ListNode(twoNode.val, null);
      node = node.next;
      twoNode = twoNode.next;
    }
  }

  if (oneNode === null) {
    while (twoNode !== null) {
      node.next = new ListNode(twoNode.val, null);
      node = node.next;
      twoNode = twoNode.next;
    }
  } else if (twoNode === null) {
    while (oneNode !== null) {
      node.next = new ListNode(oneNode.val, null);
      node = node.next;
      oneNode = oneNode.next;
    }
  }

  return list.next;
};
