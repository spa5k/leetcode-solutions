class Solution
{
public:
  int countGoodSubstrings(string s)
  {
    unordered_set<char> set(3);
    for (int i = 0; i < 3; i++)
    {
      set.insert(s[i]);
    }
    int j = 2;
    int res = 0;
    if (set.size() == 3)
    {
      res += 1;
    }
    for (int i = 3; i < s.length(); i++)
    {
      set.erase(s[i - 3]);
      set.insert(s[i]);
      if (set.size() == 3)
      {
        res += 1;
      }
      j++;
    }
    return res;
  }
};