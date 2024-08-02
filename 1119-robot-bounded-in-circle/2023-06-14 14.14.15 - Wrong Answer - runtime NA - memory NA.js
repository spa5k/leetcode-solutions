/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let x = 0;
  let y = 0;
  let directions = "NORTH";
  for (let move in instructions) {
    if (move === "G") {
      if (directions === "NORTH") {
        y += 1;
      } else if (directions === "SOUTH") {
        y -= 1;
      } else if (directions === "EAST") {
        x += 1;
      } else {
        x -= 1;
      }
    } else if (move === "L") {
      if (directions === "NORTH") directions = "WEST";
      else if (directions === "WEST") directions = "SOUTH";
      else if (directions === "SOUTH") directions = "EAST";
      else directions = "NORTH";
    } else if (move === "R") {
      if (directions === "NORTH") directions = "EAST";
      else if (directions === "EAST") directions = "SOUTH";
      else if (directions === "SOUTH") directions = "WEST";
      else directions = "NORTH";
    }
  }
  if (x == 0 && y == 0) return true;
  if (directions === "NORTH") return false;
  return true;
};