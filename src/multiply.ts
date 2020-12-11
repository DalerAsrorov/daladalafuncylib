import { curry } from './curry';

/**
 * mul(2, 2)(3)(4)() = 48
 */
export const multiply = curry((x, y) => x * y, 1);