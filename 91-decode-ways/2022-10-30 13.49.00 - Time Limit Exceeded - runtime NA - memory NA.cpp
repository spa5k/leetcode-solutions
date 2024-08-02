class Solution
{
public:
  int numDecodings(string s)
  {
    return s.empty() ? 0 : numDecoding(0, s);
  }
  int numDecoding(int p, string &s)
  {
    int n = s.size();
    if (p == n)
      return 1;
    if (s[p] == '0')
      return 0;
    int res = numDecoding(p + 1, s);
    if (p < n - 1 && (s[p] == '1' || (s[p] == '2' && s[p + 1] < '7')))
      res += numDecoding(p + 2, s);
    return res;
  }
};