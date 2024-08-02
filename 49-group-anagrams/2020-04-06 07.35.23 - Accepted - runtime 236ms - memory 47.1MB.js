/**
 * @param {string[]} strs
 * @return {string[][]}
 */



const groupAnagrams = strs => {
 const groups = {};
    for (let s of strs) {
        let key = s.split('').sort().join('');
        groups[key] = [...groups[key] || [], s];
    }
    return Object.values(groups);
};