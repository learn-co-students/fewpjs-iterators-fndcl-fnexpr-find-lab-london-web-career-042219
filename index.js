function superbowlWin(array) {
  let game = array.find(year => year.result === "W");
  if (game) {
    return game.year;
  }
};

