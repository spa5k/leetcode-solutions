class Solution
{
public:
    string greatestLetter(string s)
    {
        char finalLetter;
        unordered_map<char, int> m;
        for (auto &&c : s)
        {
            m[c]++;
        }
        string answer;
        for (auto &&val : m)
        {
            char l = tolower(val.first);
            char u = toupper(val.first);

            if (m.count(l) > 0 && m.count(u) > 0)
                answer = toupper(val.first);
        }
        return answer;
    }
};