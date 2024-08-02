class Solution
{
public:
  string reverseVowels(string s)
  {
    set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    for (int l = 0, r = s.size() - 1; l < r;)
    {
      while (l < r && !vowels.count(s[l]))
        ++l;
      while (l < r && !vowels.count(s[r]))
        --r;
      swap(s[l++], s[r--]);
    }
    return s;
  }
};