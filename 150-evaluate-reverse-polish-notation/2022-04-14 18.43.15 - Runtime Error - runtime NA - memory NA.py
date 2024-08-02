class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for i in tokens:
            if i.isdigit():
                stack.append(int(i))
            else:
                stack = self.handleLastTwo(stack, i)
        return stack

    def handleLastTwo(stack, operation):
        if len(stack) == 1:
            return stack
        second = stack.pop()
        first = stack.pop()

        if operation == "+":
            res = first + second
            stack.append(res)
        elif operation == "-":
            res = first - second
            stack.append(res)
        elif operation == "*":
            res = first * second
            stack.append(res)
        else:
            res = first / second
            stack.append(int(res))
        return stack