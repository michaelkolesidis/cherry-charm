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

const segmentToFruit = (reel: number, segment: number) => {
  switch (reel) {
    case 0:
      switch (segment) {
        // case 0:
        case 8:
          return Fruit.cherry;
        // case 1:
        case 9:
          return Fruit.lemon;
        // case 2:
        case 10:
          return Fruit.lemon;
        // case 3:
        case 11:
          return Fruit.banana;
        // case 4:
        case 12:
          return Fruit.banana;
        // case 5:
        case 13:
          return Fruit.lemon;
        // case 6:
        case 14:
          return Fruit.apple;
        // case 7:
        case 15:
          return Fruit.lemon;
      }
      break;
    case 1:
      switch (segment) {
        // case 0:
        case 8:
          return Fruit.lemon;
        // case 1:
        case 9:
          return Fruit.lemon;
        // case 2:
        case 10:
          return Fruit.banana;
        // case 3:
        case 11:
          return Fruit.apple;
        // case 4:
        case 12:
          return Fruit.cherry;
        // case 5:
        case 13:
          return Fruit.lemon;
        // case 6:
        case 14:
          return Fruit.lemon;
        // case 7:
        case 15:
          return Fruit.apple;
      }
      break;
    case 2:
      switch (segment) {
        // case 0:
        case 8:
          return Fruit.lemon;
        // case 1:
        case 9:
          return Fruit.lemon;
        // case 2:
        case 10:
          return Fruit.banana;
        // case 3:
        case 11:
          return Fruit.lemon;
        // case 4:
        case 12:
          return Fruit.cherry;
        // case 5:
        case 13:
          return Fruit.apple;
        // case 6:
        case 14:
          return Fruit.lemon;
        // case 7:
        case 15:
          return Fruit.apple;
      }
      break;
  }
};

export default segmentToFruit;
