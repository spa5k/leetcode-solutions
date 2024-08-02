class Solution
{
public:
  bool isAnagram(string s, string t)
  {
    if (s == t)
      return true;
    if (s.size() != t.size())
      return false;
    int mp[26] = {};
    for (int i = 0; i < s.size(); i++)
    {
      mp[s[i] - 'a']++;
      mp[t[i] - 'a']--;
    }
    for (auto &&i : mp)
    {
      if (i)
        return false;
    }

    return true;
  }
};