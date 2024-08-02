class Trie:
    def __init__(self, words=[]):
        self.trie = {}
        for w in words: self.insert(w)

    def insert(self, word):
        t = self.trie
        for w in word:
            if w not in t:
                t[w] = {}
            t = t[w]
        t['#'] = '#'

    def search(self, word):
        t = self.trie
        for w in word:
            if w not in t:
                return False
            t = t[w]
        if '#' in t:
            return True
        return False

    def starts(self, prefix):
        t = self.trie
        for w in prefix:
            if w not in t:
                return False
            t = t[w]
        return True
    
    def remove(self, word):
        t = self.trie
        nodes = []
        for w in word:
            if w not in t:
                return False
            t = t[w]
            nodes.append((t,w))

        if '#' in t:
            p = '#'
            for n,w in nodes[::-1]:
                if len(n[p]) == 0 or p == '#' : del n[p]
                p = w     
                
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