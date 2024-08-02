class Solution
{
public:
  bool canVisitAllRooms(vector<vector<int>> &rooms)
  {
    vector<int> keysInBalance(rooms.size());
    vector<int> roomsOpened(rooms.size(), false);
    for (auto &&i : rooms)
    {
      for (auto &&keys : i)
      {
        keysInBalance.push_back(keys);
      }
    }
    for (auto &&key : keysInBalance)
    {
      roomsOpened[key] = true;
    }
    for (auto &&rooms : roomsOpened)
    {
      if (rooms == false)
        return false;
    }
    return true;
  }
};