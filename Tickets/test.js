describe("getWinner", () => {
    it(" The simple method is winner", () => {
        assert.deepEqual(getWinner({ min: 1, max: '111111' }),{winner: "simple method", simple: 5133, complicated:  4001});
    });

    it("min > max. It returns the error message", () => {
        assert.deepEqual(getWinner({ min: 888888, max: 111999 }), [{ status: 'failed', reason: 'wrong input value max - value must be greater than min'}]);
    });

    it("min = 0. It returns the error message", () => {
        assert.deepEqual(getWinner({ min: 0, max: 111999 }), [{ status: 'failed', reason: 'wrong input value min - value must be more than 0'}]);
    });

    it("max = 0. It returns the error message", () => {
        assert.deepEqual(getWinner({  max: 0, min: 111999 }), [{ status: 'failed', reason: 'wrong input value max - value must be greater than min'}]);
    });

    it("min = null. It returns the error message", () => {
        assert.deepEqual(getWinner({  min: null, max: 181999 }), [{ status: 'failed', reason: 'wrong input value - min'}, { status: 'failed', reason: 'wrong input value min - value must be more than 0'}]);
    });

});
