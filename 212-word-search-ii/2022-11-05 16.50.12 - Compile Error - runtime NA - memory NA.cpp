class Solution 
{
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) 
    {
        int m = board.size(), n = board[0].size();
        Trie trie(words);
        vector<string> seen;
                
        vector<pair<int,int>> dirs = {{0,-1},{0,1},{-1,0},{1,0}};

        auto dfs = [&](string p, vector<vector<char>>& b, int x, int y)
        {
            char ch = '#';
            swap(ch, b[x][y]);
            
            if (trie.search(p)) 
                seen.push_back(p), trie.remove(p);

            for (auto[ii,jj] : dirs)
            {
                int i = x + ii, j = y + jj;
                if (0 <= i && i < m && 0 <= j && j < n)
                    if (b[i][j] != "#")
                    {
                        string pp = p + b[i][j];
                        if (trie.starts(pp))
                            dfs(pp, b, i, j);
                    }
            }
            
            swap(ch, b[x][y]);
        }
        
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                dfs(board[i][j], board, i, j);
        
        return seen;
    }
};