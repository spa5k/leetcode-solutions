class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for i in asteroids:
            last_dir = None
            if len(stack) == 0:
                stack.append(i)
                continue
            last = stack.pop()
            if last < 0:
                last_dir = "left"
            else:
                last_dir = "right"

            current_dir = None
            if i < 0:
                current_dir = "left"
            else:
                current_dir = "right"

            if last_dir == current_dir:
                stack.append(last)
                stack.append(i)
            else:
                if abs(last) > abs(i):
                    stack.append(last)
                elif abs(last) > abs(i):
                    stack.append(i)
                else:
                    continue
        return stack

