class Solution
{
public:
  int leastInterval(vector<char> &tasks, int n)
  {
    if (n == 0)
      return tasks.size();
    unordered_map<char, int> m;
    for (auto &ch : tasks)
    {
      m[ch] += 1;
    }
    priority_queue<int> pq{};
    for (auto &&x : m)
    {
      pq.push(x.second);
    }
    int cycles = 0;
    while (!pq.empty())
    {
      vector<int> temp;
      for (int i = 0; i < n; i++)
      {
        if (!pq.empty())
        {
          temp.push_back(pq.top());
          pq.pop();
        }
      }
      for (int i : temp)
      {
        if (--i > 0)
        {
          pq.push(i);
        }
      }
      cycles += (pq.empty()) ? temp.size() : n + 1;
    }
    return cycles;
  }
};