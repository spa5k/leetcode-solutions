/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
// struct TreeNode
// {
//   int val;
//   TreeNode *left;
//   TreeNode *right;
//   TreeNode() : val(0), left(nullptr), right(nullptr) {}
//   TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
//   TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
// };
class Solution
{
public:
  bool isValidBST(TreeNode *root)
  {
    return check(root);
  }
  bool check(TreeNode *root)
  {
    if (!root)
    {
      return true;
    }
    if (!root->left && !root->right)
    {
      return true;
    }
    if (root->left > root->right)
    {
      return false;
    }
    if (root->val < root->left->val || root->val > root->right->val)
    {
      return false;
    }
    bool l = check(root->left);
    bool r = check(root->right);
    return l && r;
  }
};