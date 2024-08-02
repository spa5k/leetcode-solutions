class Solution
{
public:
  int minReorder(int n, vector<vector<int>> &connections)
  {
    int count = 0;
    for (int i = 0; i < connections.size(); i++)
    {
      dfs(connections, i, count);
    }
    return count;
  }
  void dfs(vector<vector<int>> &connections, int i, int &count)
  {
    vector<int> current = connections[i];
    if (current[0] == 0 || current[1] == 0)
    {
      return;
    }
    if (current[0] < current[1])
    {
      count++;
      swap(current[0], current[1]);
    }
  }
};