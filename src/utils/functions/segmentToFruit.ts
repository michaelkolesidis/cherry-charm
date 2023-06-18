import { Fruit } from "../enums";

const segmentToFruit = (reel: number, segment: number) => {
  switch (reel) {
    case 0:
      switch (segment) {
        case 0:
          return Fruit.cherry;
        // return 0;
        case 1:
          return Fruit.lemon;
        // return 1;
        case 2:
          return Fruit.lemon;
          return 2;
        case 3:
          return Fruit.banana;
        // return 3;
        case 4:
          return Fruit.banana;
        // return 4;
        case 5:
          return Fruit.lemon;
        // return 5;
        case 6:
          return Fruit.apple;
        // return 6;
        case 7:
          return Fruit.lemon;
        // return 7;
      }
      break;
    case 1:
      switch (segment) {
        case 0:
          return Fruit.lemon;
        // return 0;
        case 1:
          return Fruit.lemon;
        // return 1;
        case 2:
          return Fruit.banana;
        // return 2;
        case 3:
          return Fruit.apple;
        // return 3;
        case 4:
          return Fruit.cherry;
        // return 4;
        case 5:
          return Fruit.lemon;
        // return 5;
        case 6:
          return Fruit.lemon;
        // return 6;
        case 7:
          return Fruit.apple;
        // return 7;
      }
      break;
    case 2:
      switch (segment) {
        case 0:
          return Fruit.lemon;
        // return 0;
        case 1:
          return Fruit.lemon;
        // return 1;
        case 2:
          return Fruit.banana;
        // return 2;
        case 3:
          return Fruit.lemon;
        // return 3;
        case 4:
          return Fruit.cherry;
        // return 4;
        case 5:
          return Fruit.apple;
        // return 5;
        case 6:
          return Fruit.lemon;
        // return 6;
        case 7:
          return Fruit.apple;
        // return 7;
      }
      break;
  }
};

export default segmentToFruit;
