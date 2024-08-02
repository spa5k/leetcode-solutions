class Solution
{
public:
  vector<int> maxSubsequence(vector<int> &nums, int k)
  {
    priority_queue<int> pq(nums.begin(), nums.end());
    vector<int> res(k);
    for (int i = 0; i < k; i++)
    {
      int x = pq.top();
      pq.pop();
      res[i] = x;
    }
    return res;
  }
};