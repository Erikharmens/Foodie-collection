import { it, describe, expect } from 'vitest';

import sortProductsById from './sortProductsById';

describe('sortProductsById', () => {
  it('should return empty array if given empty array', () => {
    const result = sortProductsById([]);

    expect(result).toEqual([]);
  });

  it('should return same array if given sorted array', () => {
    const input = [{ id: 0 }, { id: 1 }, { id: 2 }];

    const result = sortProductsById(input);

    expect(result).toEqual(input);
  });

  it('should return sorted array if given unsorted', () => {
    const input = [{ id: 3 }, { id: 0 }, { id: 2 }, { id: 11 }];
    const output = [{ id: 0 }, { id: 2 }, { id: 3 }, { id: 11 }];

    const result = sortProductsById(input);

    expect(result).toEqual(output);
  });

  it('should not mutate the initial input', () => {
    const input = [{ id: 3 }, { id: 0 }, { id: 2 }, { id: 11 }];

    const result = sortProductsById(input);

    expect(result).not.toEqual(input);
  });
});

// toBe / toEqual
