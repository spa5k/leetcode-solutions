# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head.next
        count = 0

        while fast:
            if(slow == fast):
                return True

            if count % 2 == 0:
                slow = slow.next

            fast = fast.next
            count += 1

        if count == 1:
            return True

        if fast is None:
            return True
        else:
            return False
