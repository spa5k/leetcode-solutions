/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
  let count = 0;
  let ruleKeyIndex = 0;

  const a = items;
  const b = a[1];
  if (ruleKey === "type") {
    ruleKeyIndex = 0;
  } else if (ruleKey === "color") {
    ruleKeyIndex = 1;
  } else {
    ruleKeyIndex = 2;
  }

  items.map((a) => {
    let itemValue = a[ruleKeyIndex];
    if (itemValue === ruleValue) {
      count++;
    }
  });
  return count;
};