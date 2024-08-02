class Solution
{
public:
  int fillCups(vector<int> &arr)
  {
    priority_queue<int> pq(begin(arr), end(arr));

    int ans = 0;

    while (pq.size() > 2)
    {
      int a = pq.top();
      pq.pop();
      int b = pq.top();
      pq.pop();

      if (--a)
        pq.push(a);
      if (--b)
        pq.push(b);

      ans++;
    }

    if (pq.size())
      ans += pq.top();

    return ans;
  }
};