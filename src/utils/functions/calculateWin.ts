/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import devLog from './devLog';

/**
 * Returns the amount of coins won when at the end of a spin
 *
 * @param fruit0 - The fruit result of reel 0
 * @param fruit0 - The fruit result of reel 1
 * @param fruit0 - The fruit result of reel 2
 * @returns Coins won
 *
 * @example
 * An example of a win
 * ```
 * // Returns 50
 * calculateWin("CHERRY", "CHERRY", "CHERRY")
 * ```
 *
 * @example
 * An example of a loss
 * * ```
 * // Returns 0
 * calculateWin("CHERRY", "APPLE", "APPLE")
 * ```
 */
const calculateWin = (
  fruit0: string,
  fruit1: string,
  fruit2: string
): number => {
  let coins = 0;

  // Check for 3 cherries
  if (fruit0 === 'CHERRY' && fruit1 === 'CHERRY' && fruit2 === 'CHERRY') {
    coins = 50;
  }
  // Check for 2 cherries
  else if (fruit0 === 'CHERRY' && fruit1 === 'CHERRY') {
    coins = 40;
  }
  // Check for 3 apples
  else if (fruit0 === 'APPLE' && fruit1 === 'APPLE' && fruit2 === 'APPLE') {
    coins = 20;
  }
  // Check for 2 apples
  else if (fruit0 === 'APPLE' && fruit1 === 'APPLE') {
    coins = 10;
  }
  // Check for 3 bananas
  else if (fruit0 === 'BANANA' && fruit1 === 'BANANA' && fruit2 === 'BANANA') {
    coins = 15;
  }
  // Check for 2 bananas
  else if (fruit0 === 'BANANA' && fruit1 === 'BANANA') {
    coins = 5;
  }
  // Check for 3 lemons
  else if (fruit0 === 'LEMON' && fruit1 === 'LEMON' && fruit2 === 'LEMON') {
    coins = 5;
  }

  if (coins > 0) {
    devLog(`Coins won: ${coins}`);
  }

  // If no coins were won 0 is returned
  return coins;
};

export default calculateWin;
