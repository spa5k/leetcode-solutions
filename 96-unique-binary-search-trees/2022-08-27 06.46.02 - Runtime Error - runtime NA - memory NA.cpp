// class Solution
// {
// public:
//   int dp[20]{};
//   int numTrees(int n)
//   {
//     // numTrees[4] =  numTrees[0]* numTrees[3] +
//     //                numTrees[1] * numTrees[2] +
//     //                numTrees[2] * numTrees[1] +
//     //                numTrees[3] * numTress[1]
//     if (n <= 1)
//       return 1;
//     if (dp[n])
//       return dp[n];
//     for (int i = 1; i <= n; i++)
//     {
//       dp[n] += numTrees(i - 1) * numTrees(n - i);
//     }
//     return dp[n];
//   }
// };

class Solution
{
public:
  int numTrees(int n)
  {
    vector<int> dp(n + 1);
    dp[0] = dp[1] = 1;

    for (int i = 2; i <= n; i++)
    {

      for (int j = 1; j <= i; i++)
      {
        dp[i] += dp[j - 1] * dp[i - j];
      }
    }
    return dp[n];
  }
};
