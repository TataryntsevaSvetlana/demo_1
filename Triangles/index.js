/*3.	Сортировка треугольников
Вывести треугольники в порядке убывания их площади.
Входные параметры: массив объектов треугольник
Выход: упорядоченный массив имён треугольников
Примечание:
•	Расчёт площади треугольника должен производится по формуле Герона.
•	Каждый треугольник определяется именами вершин и длинами его сторон.
•	Приложение должно обрабатывать ввод чисел с плавающей точкой:
{
    vertices: ‘ABC’,
    a: 10,
    b: 20,
    c: 22.36
}
*/

function showTriangles(triangles) {
    const validationErrors = isValidValues(triangles);
    let result;

    if (validationErrors.length === 0) {
        return triangles
            .map(calculateAreasOfTriangles)
            .sort((a, b) => {
                if (a.triangleArea < b.triangleArea) {
                    return -1;
                }
                return 1;
            })
            .map(triangle => triangle.vertices);

    } else {
        result = validationErrors;
    }
    return result;
}

console.log(showTriangles([
    {vertices: 'ABC', a: 60, b: 35, c: 27.36},
    {vertices: 'DEF', d: 30, e: undefined, f: 16.7},
    {vertices: 'GHI', g: 24.8, h: 15, i: 35},
    {vertices: 'KLM', k: 7, l: 13.5, m: 18}
]));


function isValidValues(triangles) {
    const validationErrors = [];
    const hasLength = triangles.length !== 0;

    triangles.forEach(({vertices, ...obj}) => {
        const valuesOfTops = Object.values(obj);
        const isValidTops = valuesOfTops.every(value => Number.isFinite(value) || Number(value) && value > 0);
        const isValidVertices = typeof vertices === 'string' && vertices.length === 3;

        const sortedVertices = vertices.toLowerCase().split('').sort().join('');
        const sortedTopNames = Object.keys(obj).sort().join('').toLowerCase();



        if (!isValidTops) {
            validationErrors.push({
                status: 'failed',
                reason: 'wrong input values for the sides of a triangle, values must be more than 0'
            });
        }

        if (!isValidVertices) {
            validationErrors.push({
                status: 'failed',
                reason: 'wrong input value for the vertices of a triangle, value must be string with 3 symbols'
            });
        }

        if (sortedVertices !== sortedTopNames) {
            validationErrors.push({status: 'failed', reason: 'the vertices of the triangle do not match its sides'});
        }

        if (!getIsValidTriangle(...valuesOfTops)){
            validationErrors.push({
                status: 'failed',
                reason: 'wrong input values - a triangle with such sides does not exist'});
        }
    });

    if (!hasLength) {
        validationErrors.push({status: 'failed', reason: 'no values entered'});
    }

    return validationErrors;
}


function calculateAreasOfTriangles({vertices, ...trianglesTops}) {
    const [a, b, c] = Object.values(trianglesTops);
    const p = ((a + b + c) / 2);
    const triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return {vertices, ...trianglesTops, triangleArea};
}

function getIsValidTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}










