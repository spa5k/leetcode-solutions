class Solution
{
public:
  int countGoodSubstrings(string s)
  {
    unordered_map<char, int> map{};
    int res = 0;
    for (int i = 0; i < s.size(); i++)
    {
      if (i > 2)
      {
        int a = map[s[i - 3]];
        if (a - 1 == 0)
        {
          map.erase(s[i - 3]);
        }
      }
      map[s[i]]++;
      if (map.size() == 3)
      {
        res++;
      }
    }
    return res;
  }
};