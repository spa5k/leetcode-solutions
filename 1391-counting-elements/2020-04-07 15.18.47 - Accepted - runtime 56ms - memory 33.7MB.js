/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = arr => {
    let b=0;
    for(i=0;i<arr.length;i++) {
        let c=arr[i]+1
        {arr.includes(c) && b++}
        
    }
    return b;
};