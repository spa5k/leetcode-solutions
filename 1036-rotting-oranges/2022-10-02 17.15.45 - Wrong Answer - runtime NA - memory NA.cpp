class Solution
{
public:
  int orangesRotting(vector<vector<int>> &grid)
  {
    int m = grid.size();
    int n = grid[0].size();
    int time = 0;
    int fresh = 0;
    queue<pair<int, int>> q;
    vector<int> dir = {-1, 0, 1, 0, -1};

    for (int i = 0; i < m; i++)
    {
      for (int j = 0; j < n; j++)
      {
        if (grid[i][j] == 1)
        {
          fresh++;
        }
        else if (grid[i][j] == 2)
        {
          q.push({i, j});
        }
      }
    }

    while (!q.empty() && fresh > 0)
    {
      for (int i = 0; i < q.size(); i++)
      {
        auto p = q.front();
        q.pop();
        for (int i = 0; i < 4; i++)
        {
          int r = p.first + dir[i];
          int c = p.second + dir[i + 1];
          if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == 1)
          {
            grid[r][c] = 2;
            q.push({r, c});
            fresh--;
          }
        }
      }
      time += 1;
    }
    if (fresh > 0)
      return -1;
    return time;
  }
};