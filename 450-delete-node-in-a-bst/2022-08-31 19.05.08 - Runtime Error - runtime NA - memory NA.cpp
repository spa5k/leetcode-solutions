class Solution
{
public:
  TreeNode *deleteNode(TreeNode *root, int key)
  {
    if (root)
      if (key < root->val)
        root->left = deleteNode(root->left, key); // We frecursively call the function until we find the target node
      else if (key > root->val)
        root->right = deleteNode(root->right, key);
      else{
TreeNode *temp=root->left;
while(temp->right)temp=temp->right;
temp->right=root->right;
return root->left;
}
    return root;
  }
};