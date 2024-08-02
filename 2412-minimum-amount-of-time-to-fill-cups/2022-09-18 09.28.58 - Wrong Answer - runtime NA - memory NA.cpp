class Solution
{
public:
  int fillCups(vector<int> &amount)
  {
    priority_queue<int> q{amount.begin(), amount.end()};
    int res = 0;
    while (q.size() > 2)
    {
      int a = q.top();
      q.pop();
      int b = q.top();
      q.pop();
      if (--a)
      {
        q.push(a);
      }
      if (--b)
      {
        q.push(b);
      }
      res++;
    }
    if (q.size())
    {
      res += q.top();
    }
    return res;
  }
};