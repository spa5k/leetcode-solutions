public:
    list<int> li;
    unordered_map<int, bool> m;
    FirstUnique(vector<int>& nums) {
        for(auto i:nums){

//         if i is not in map then we push i to the list an make m[i] = true i.e. unique
//         else we make it false. i.e. it is not unique now. 

            if(m.find(i) == m.end()){
                li.push_back(i);
                m[i] = true;
            }else{
                m[i] = false;
            }
        }

    }

    int showFirstUnique() {
        for(auto it:li){
            if(m[it] == true){
                return it;
            }
        }
        return -1;

    }

    void add(int value) {
        if(m.find(value) == m.end()){
            li.push_back(value);
            m[value] = true;
        }else{
            m[value] = false; 
        }

    }
};