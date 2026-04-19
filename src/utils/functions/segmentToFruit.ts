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
