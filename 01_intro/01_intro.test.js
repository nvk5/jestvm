const {sum, nativeNull} = require('./01_intro');

describe('Sum function', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4);
        expect(sum(1, 3)).toEqual(4);
    });
    test('should return value correctly comparing to other values', () => {
        expect(sum(1, 3)).toBeGreaterThan(3);
        expect(sum(1, 3)).toBeGreaterThanOrEqual(4);
        expect(sum(1, 3)).toBeLessThan(5);
        expect(sum(1, 3)).toBeLessThanOrEqual(4);
    });
    
    test('should sum 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    });
});

describe('Nativenull function', () => {
    test('should return falsy value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    });
});



