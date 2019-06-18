describe("getFibonacciNumbersInRange", () => {
    it("We expect a series of two-digit numbers", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 0, max: 100, length: 2}), [ 13, 21, 34, 55, 89 ]);
    });

    it("Entered the value for the max (max = '10000').We expect a series of four-digit numbers", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 5, max: '10000', length: 4}), [1597, 2584, 4181, 6765]);
    });

    it("Entered the invalid value for the min (min = 'bvbv').  It returns the error message", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 'bvbv', max: 100, length: 2}), [{ status: 'failed', reason: 'wrong input value - min'}, { status: 'failed', reason: 'wrong input value min - value must be more than 0'},{ status: 'failed', reason: 'wrong input value max - value must be greater than min'}]);
    });

    it("Entered the invalid value for the max (max = NaN).  It returns the error message", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 1, max: NaN, length: 2}), [{ status: 'failed', reason: 'wrong input value - max' }, { status: 'failed', reason: 'wrong input value max - value must be greater than min'}]);
    });

    it("Entered the invalid value for the min (min = -9).  It returns the error message", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: -9, max: 100, length: 2}), [{ status: 'failed', reason: 'wrong input value min - value must be more than 0'}]);
    });

    it("Entered the invalid value for the max (max < min).  It returns the error message", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 100, max: 1, length: 2}), [{ status: 'failed', reason: 'wrong input value max - value must be greater than min' }]);
    });
    it("Entered the invalid value for the length (length = 0).  It returns the error message", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 10, max: 100, length: 0}), [{ status: 'failed', reason: 'wrong input value - length' }]);
    });

    it("Entered the invalid value for the length (length = null).  It returns the error message", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 10, max: 200, length: null}), [{ status: 'failed', reason: 'wrong input value - length'}]);
    });

    it("length = undefined. We expect a series of numbers in the range of any number of characters.", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 56, max: 459, length: undefined}), [89, 144, 233, 377]);
    });
});
