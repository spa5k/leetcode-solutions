# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        current = head
        prev = None
        while current:
            if current.val == val:
                if current == head:
                    current = head = head.next
                else:
                    prev.next = current.next
                    current = current.next
            else:
                prev = current
                current = current.next
        return head