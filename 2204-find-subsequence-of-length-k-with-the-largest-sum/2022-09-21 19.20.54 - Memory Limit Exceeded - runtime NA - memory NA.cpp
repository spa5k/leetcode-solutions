typedef pair<int, int> pi;
class Solution
{
public:
  vector<int> maxSubsequence(vector<int> &nums, int k)
  {
    vector<int> ans{};
    int n = nums.size();
    if (n == k)
    {
      return nums;
    };
    priority_queue<pi, vector<pi>, greater<pi>> pq;
    for (int i = 0; i < n; i++)
    {
      pq.push({nums[i], i});
      if (pq.size() > k)
      {
        pq.pop();
      }
    }
    priority_queue<pi, vector<pi>, greater<pi>> sort;
    while (!pq.empty())
    {
      sort.push({pq.top().second, pq.top().first});
      pq.pop();
    }
    while (!sort.empty())
    {
      ans.push_back(sort.top().second);
    }
    return ans;
  }
};