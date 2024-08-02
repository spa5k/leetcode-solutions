/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (nodes) {
  let slow = nodes;
  let fast = nodes;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow.val === fast.val) {
      return true;
    }
    
  }
  return false;
};