class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        last_hit = False

        for i in asteroids:
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
                abs_last = abs(last)
                abs_i = abs(i)
                last_hit = True
                if abs_last > abs_i:
                    stack.append(last)
                elif abs_last < abs_i:
                    stack.append(i)

        return stack