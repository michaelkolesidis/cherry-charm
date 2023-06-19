// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { Fruit } from "../enums";

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
