# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        arr = []
        prev = head
        arr.append(prev.val)
        current = head.next
        while current:
            if current.val in arr:
                prev.next = current.next
                current = current.next
            else:
                prev.next = current
                current = current.next
        return prev
