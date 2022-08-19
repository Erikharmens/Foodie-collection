import { it, describe, expect } from 'vitest';

import sum from './sum.ts';

describe('sum function', () => {
  it('should return 0', () => {
    const result = sum(0, 0);

    expect(result).toBe(0);
  });

  it('should return first number, if adding 0', () => {
    const result = sum(15, 0);

    expect(result).toBe(15);
  });

  it('should return second number, if first is 0', () => {
    const result = sum(0, 25);

    expect(result).toBe(25);
  });

  it('should return a sum of numbers', () => {
    const result = sum(10, 35);

    expect(result).toBe(45);
  });

  it('should be able to sum up negative numbers', () => {
    const result = sum(10, -50);

    expect(result).toBe(-40);
  });
});
