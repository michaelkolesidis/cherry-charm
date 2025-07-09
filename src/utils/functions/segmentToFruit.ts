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

import { Fruit } from '../enums';

const segmentToFruit = (reel: number, segment: number): Fruit | undefined => {
  const reelMaps: Record<number, Fruit[]> = {
    0: [
      Fruit.cherry,
      Fruit.lemon,
      Fruit.lemon,
      Fruit.banana,
      Fruit.banana,
      Fruit.lemon,
      Fruit.apple,
      Fruit.lemon,
      Fruit.cherry,
      Fruit.lemon,
      Fruit.lemon,
      Fruit.banana,
      Fruit.banana,
      Fruit.lemon,
      Fruit.apple,
      Fruit.lemon,
    ],
    1: [
      Fruit.lemon,
      Fruit.lemon,
      Fruit.banana,
      Fruit.apple,
      Fruit.cherry,
      Fruit.lemon,
      Fruit.lemon,
      Fruit.apple,
      Fruit.lemon,
      Fruit.lemon,
      Fruit.banana,
      Fruit.apple,
      Fruit.cherry,
      Fruit.lemon,
      Fruit.lemon,
      Fruit.apple,
    ],
    2: [
      Fruit.lemon,
      Fruit.lemon,
      Fruit.banana,
      Fruit.lemon,
      Fruit.cherry,
      Fruit.apple,
      Fruit.lemon,
      Fruit.apple,
      Fruit.lemon,
      Fruit.lemon,
      Fruit.banana,
      Fruit.lemon,
      Fruit.cherry,
      Fruit.apple,
      Fruit.lemon,
      Fruit.apple,
    ],
  };

  const normalizedSegment = segment % 16;
  return reelMaps[reel]?.[normalizedSegment];
};

export default segmentToFruit;
