export const randomNum = (min, max) => {
  var n = [];
  for (var i = 0; i < 4; i++) {
    n.push(Math.floor(Math.random() * max) + min);
  }
  return n;
};
