/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let max=0; //7236 
    let num1=num.toString(); // string
    

    const numArr=num1.split(''); // array
    // ['2','7','3','6'] // [''];
    
    for(let i=0;i<=numArr.length;i+=2) {
        // i='2'
        let temp='';
        let newArr=numArr; //string[] ['2','7','3','6']
        temp =newArr[i];//string
        // temp='2'
        newArr[i]=newArr[i+1];//   ['7','7','3','6']
        newArr[i+1]=temp;//   ['7','2','3','6']
        const newNumber=newArr.join('');
        // return newNumber;
        // '7236'
        let n=parseInt(newNumber);
        return n
//         if(max<n) {
//             max=n
//         }
       
        // max=Math.max(max,parseInt(newNumber));
    }
    // return max;
};