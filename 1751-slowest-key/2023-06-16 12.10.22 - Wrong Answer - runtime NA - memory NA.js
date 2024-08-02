/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let left = 0;
  let max_time = releaseTimes[0];
  let index = left;
  max_time;
  for (let right = 1; right < releaseTimes.length; right++) {
    let difference = releaseTimes[right] - releaseTimes[left];
    if (left > 0 && difference >= max_time) {
      max_time = difference;
      index = right;
    }
    left++;
  }
  return keysPressed[index];
};