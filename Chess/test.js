describe("showChessBoard", () => {
    it("Enter the valid values of the width, height, symbol. Chess board was drawn", () => {
        assert.equal(showChessBoard(5, 4, '*'), '\n  * * \n * * \n  * * \n * * \n');
    });

    it("Entered the invalid values for the width.  It returns the error message", () => {
        assert.deepEqual(showChessBoard('sveta', 4, '*'), [{ status: 'failed', reason: 'wrong input values - width'}]);
    });

    it("Entered the invalid values for the height.  It returns the error message", () => {
        assert.deepEqual(showChessBoard(5, NaN, '*'), [{ status: 'failed', reason: 'wrong input values - height'}]);
    });

    it("Entered the invalid values for the symbol.  It returns the error message" , () => {
        assert.deepEqual(showChessBoard(10, 4, '***'), [{ status: 'failed', reason: 'wrong input values - symbol' }]);
    });

    it("Entered the invalid values for the width = 0.  It returns the error message", () => {
        assert.deepEqual(showChessBoard(0, 4, '*'), [{ status: 'failed', reason: 'wrong input values - values must be more than 0' }]);
    });
    it("Values not passed. The error was expected", () => {
        assert.deepEqual(showChessBoard(), [
            { status: 'failed', reason: 'wrong input values - width'},
            { status: 'failed', reason: 'wrong input values - height'},
            { status: 'failed', reason: 'wrong input values - symbol' }
        ]);
    });
});
