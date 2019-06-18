describe("showTriangles", () => {

    it('Enter the correct value of the triangles, it returns a sorted array of the triangles areas in descending order', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 10, b: 20, c: 22.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 14.8, l: 35, m: 28}
        ]), ["ABC", "GHI", "KLM", "DEF"]);
    });


    it('Enter the correct value of the triangles, it returns a sorted array of the triangles areas in descending order', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: '60', b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 14.8, l: 35, m: 28}
        ]), ["GHI", "KLM", "DEF", "ABC"]);
    });


    it('Entered the invalid value (a triangle with such sides does not exist), it returns an error message', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 7, l: 3.5, m: 18}
        ]), [{
            status: 'failed',
            reason: 'wrong input values - a triangle with such sides does not exist'
        }]);
    });

    it("Entered the invalid value (e = undefined), it returns an error message", () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: undefined, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 7, l: 13.5, m: 18}
        ]), [{
            status: 'failed',
            reason: 'wrong input values for the sides of a triangle, values must be more than 0'
        }, {
            status: 'failed',
            reason: 'wrong input values - a triangle with such sides does not exist'
        }]);
    });


    it('Entered the invalid value (vertices: "ZWR", sides: a, b, c), it returns an error message', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ZWR', a: 60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 17, l: 3.5, m: 18}
        ]), [{status: 'failed', reason: 'the vertices of the triangle do not match its sides'}]);
    });

    it("Entered the invalid value (a= -60), it returns an error message", () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: -60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 17, l: 3.5, m: 18}
        ]), [{
            status: 'failed',
            reason: 'wrong input values - a triangle with such sides does not exist'
        }]);
    });

    it('No values entered, it returns an error message', () => {
        assert.deepEqual(showTriangles([]), [{status: 'failed', reason: 'no values entered'}]);
    });

});
