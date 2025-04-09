import { describe, it, expect } from 'vitest';
import { chunkArray } from '../src';

describe('chunk array', () => {
  it('chunk array into group of 2 elements', () => {
    const arr = [1, 2, 3, 4];
    const result = chunkArray(arr, 2);

    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
