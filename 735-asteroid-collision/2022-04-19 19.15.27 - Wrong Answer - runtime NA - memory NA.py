class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        last_hit = False

        for i in asteroids:
            print(stack)
            last_dir = None
            if len(stack) == 0 or last_hit == True:
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
            elif last_dir == "left" and current_dir == "right":
                stack.append(last)
                stack.append(i)
            last_hit = False

            if last_dir == "right" and current_dir == "left":
                last_hit = True
                if abs(last) > abs(i):
                    stack.append(last)
                elif abs(last) > abs(i):
                    stack.append(i)
                else:
                    continue
            else:
                continue
            # else:

        return stack