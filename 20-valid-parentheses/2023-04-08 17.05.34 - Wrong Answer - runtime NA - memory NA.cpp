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
            if (i == '(' || i == '[' || i == '{')
            {
                stack.push(i);
            }
            else if (!stack.empty())
            {
                if ((i == ')' && stack.top() == '(') ||
                    (i == '}' && stack.top() == '{') ||
                    (i == ']' && stack.top() == '['))
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