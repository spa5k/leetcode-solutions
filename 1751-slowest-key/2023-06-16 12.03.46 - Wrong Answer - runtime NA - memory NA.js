/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let left = 0;
  let max_time = releaseTimes[1] - releaseTimes[0];
  let index = 0;
  for (let right = 0; right < releaseTimes.length; right++) {
    let difference = releaseTimes[right] - releaseTimes[left];
    if (difference >= max_time) {
      max_time = difference;
      index = left;
    }
    left++;
  }
  return keysPressed[index];
};