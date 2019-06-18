describe("getPalindrome", () => {
    it("Input number is 121145, the greatest palindrome is 121", () => {
        assert.equal(getPalindrome(121145), 121);
    });

    it("Input number is '1234437', the greatest palindrome is  3443", () => {
        assert.equal(getPalindrome('1234437'), 3443);
    });

    it("Input number is 13654654987, result is 0, there is no palindrome", () => {
        assert.equal(getPalindrome(13654654987), 0);
    });

    it("Input number is 11211, the palindrome is input number", () => {
        assert.equal(getPalindrome(11211), 11211);
    });

    it("Input number must be less than 17 characters.  It returns the error message", () => {
    assert.deepEqual(getPalindrome(74575686789457568678), [{ status: 'failed', reason: 'input number must be less than 17 characters'}]);
    });

    it("The invalid value entered.  It returns the error message", () => {
        assert.deepEqual(getPalindrome('74575sveta'), [{ status: 'failed', reason: 'the entered value is not a number'}, { status: 'failed', reason: 'the entered value must be more than 0'} ]);
    });

    it("The invalid value entered (number = -56865).  It returns the error message", () => {
        assert.deepEqual(getPalindrome(-56865), [{ status: 'failed', reason: 'the entered value must be more than 0'} ]);
    });


});
