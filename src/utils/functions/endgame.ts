// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

const endgame = (fruit0: string, fruit1: string, fruit2: string) => {
  let coins = 0;

  // Check for 3 cherries
  if (fruit0 === "CHERRY" && fruit1 === "CHERRY" && fruit2 === "CHERRY") {
    coins = 50;
  }
  // Check for 2 cherries
  else if (fruit0 === "CHERRY" && fruit1 === "CHERRY") {
    coins = 40;
  }
  // Check for 3 apples
  else if (fruit0 === "APPLE" && fruit1 === "APPLE" && fruit2 === "APPLE") {
    coins = 20;
  }
  // Check for 2 apples
  else if (fruit0 === "APPLE" && fruit1 === "APPLE") {
    coins = 10;
  }
  // Check for 3 bananas
  else if (fruit0 === "BANANA" && fruit1 === "BANANA" && fruit2 === "BANANA") {
    coins = 15;
  }
  // Check for 2 bananas
  else if (fruit0 === "BANANA" && fruit1 === "BANANA") {
    coins = 5;
  }
  // Check for 3 lemons
  else if (fruit0 === "LEMON" && fruit1 === "LEMON" && fruit2 === "LEMON") {
    coins = 3;
  }

  if (coins > 0) {
    console.log(`Coins won: ${coins}`);
  }

  // If no coins were won 0 is returned
  return coins;
};

export default endgame;
