class Solution {
public:
    int findMin(vector<int>& num) {
    if(num.empty()) {
        return 0;
    }
    int left = 0;
    int right = num.size() - 1;

    while(left <= right) {
        int mid = (left + right)/2;
        if(num[mid] > num[right]) {
            left = mid+1;
        }
        else {
            right = mid-1;         
        }
    }

    return num[left];
    }
};