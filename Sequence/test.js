describe("getNumericSequence", () => {
    it("Valid values entered (number2 = '512'), it returns the sequence of numbers", () => {
        assert.equal(getNumericSequence(8, '512'), '23, 24, 25, 26, 27, 28, 29, 30');
    });

    it("Valid values entered (decimal number), it returns the sequence of numbers'", () => {
        assert.equal(getNumericSequence(4.5, 12), '4, 5, 6, 7, 8');
    });

    it("Input number n < 0. It returns the error message", () => {
        assert.deepEqual(getNumericSequence(0, 14), [{ status: 'failed', reason: 'the entered first value must be more than 0'}]);
    });

    it("Input number m < 0. It returns the error message", () => {
        assert.deepEqual(getNumericSequence(14, 0), [{ status: 'failed', reason: 'the entered second value must be more than 0'}]);
    });

    it("Input number n = null. It returns the error message", () => {
        assert.deepEqual(getNumericSequence(null, 14), [{ status: 'failed', reason: 'the entered first value is not a number'}, { status: 'failed', reason: 'the entered first value must be more than 0'} ]);
    });

    it("Input number m = NaN. It returns the error message", () => {
        assert.deepEqual(getNumericSequence(14, NaN), [{ status: 'failed', reason: 'the entered second value is not a number'}, { status: 'failed', reason: 'the entered second value must be more than 0'} ]);
    });

});
