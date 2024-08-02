/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const vowels = ["a", "e", "e", "o", "u", "A", "E", "I", "O", "U"];
  let arr = [];
  let stringArr = s.split("");
  for (const element of s) {
    if (vowels.includes(element)) {
      arr.push(element);
    }
  }

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (vowels.includes(element)) {
      let letter = arr.pop();
      stringArr[index] = letter;
    }
  }
  return stringArr.join("");
};