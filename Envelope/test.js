describe("showLetter", () => {
    it("The first envelope should fit in the second (Enter the valid integers)", () => {
        assert.equal(showLetter({ a: 34, b: 1 }, { c: 30, d: 20 }), 1);
    });

    it("The second envelope should fit in the first (Enter the valid decimals numbers)", () => {
        assert.equal(showLetter({ a:34.01, b: 30 }, { c: 34, d: 1 }), 2);
    });

     it("It is impossible to enclose envelopes each other. Expect the result 0", () => {
        assert.equal(showLetter({a: 111, b: 1}, {c: 4, d: 111}), 0);
    });

    it("Entered the invalid value for the first envelope (a = 0).  It returns the error message", () => {
        assert.deepEqual(showLetter({a: 0, b: 1}, {c: 4, d: 111}), [{status: 'failed', reason: 'wrong input value for the first envelope - value must be more than 0'}]);
    });

    it("Entered the value for the first envelope (a = '58').  The first envelope fit in the second", () => {
        assert.deepEqual(showLetter({a: '58', b: 1}, {c: 4, d: 111}), 1);
    });

    it("Entered the invalid value for the second envelope (c = empty string).  It returns the error message", () => {
        assert.deepEqual(showLetter({a: 10, b: 1}, {c: '', d: 111}), [
            {status: 'failed', reason: 'wrong input value for the second envelope'},
            {status: 'failed', reason: 'wrong input value for the second envelope - value must be more than 0'}]);
    });

});
