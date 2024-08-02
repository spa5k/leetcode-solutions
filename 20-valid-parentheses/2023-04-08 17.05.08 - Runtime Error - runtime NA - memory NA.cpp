class Solution
{
public:
    bool isValid(string string)
    {
        stack<char> stack;

        if (string.size() == 0)
        {
            return true;
        }

        for (auto &&i : string)
        {
            char top = stack.top();
            if (i == '(' || i == '[' || i == '{')
            {
                stack.push(i);
            }
            else if (!stack.empty())
            {
                if ((i == ')' && top == '(') ||
                    (i == '}' && top == '{') ||
                    (i == ']' && top == '['))
                {
                    stack.pop();
                }
            }
            else
            {
                return false;
            }
        }
        if (stack.empty())
        {
            return true;
        }
        return false;
    }
};