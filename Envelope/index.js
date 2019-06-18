/*2.	Анализ конвертов
Есть два конверта со сторонами (a,b) и (c,d).
Требуется определить, можно ли один конверт вложить в другой.
Программа должна обрабатывать ввод чисел с плавающей точкой.

Входные параметры: объекты конверт1 и конверт2
Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.
*/

function showLetter(envelope1, envelope2) {
    const validationErrors = isValidValues(envelope1, envelope2);
    let result;

    if ( validationErrors.length === 0) {
        let {a, b} = envelope1;
        let {c, d} = envelope2;

        if (a < b) {
            a = envelope1.b;
            b = envelope1.a;
        }

        if (c < d) {
            c = envelope2.d;
            d = envelope2.c;
        }

        if ((a > c && b > d) || fitInDiagonal(a, b, c, d)) {
           return  2;

        } else if ((c > a && d > b) || fitInDiagonal(c, d, a, b)) {
           return  1;
        }

        result =  0;

    } else {
        result = validationErrors;
    }
    return result;
}

console.log(showLetter({a: '58', b: 1}, {c: 4, d: 111}));




function isValidValues(obj1, obj2) {
    const isValidValues1 = Object.values(obj1).every(isValidNumber);
    const isValidValuesGreaterThanZero1 = Object.values(obj1).every(isValueGreaterThanZero);
    const isValidValues2 = Object.values(obj2).every(isValidNumber);
    const isValidValuesGreaterThanZero2 = Object.values(obj2).every(isValueGreaterThanZero);
    const validationErrors = [];

    if (!isValidValues1){
        validationErrors.push({ status: 'failed', reason: 'wrong input value for the first envelope'});
    }
    if (!isValidValuesGreaterThanZero1){
        validationErrors.push({ status: 'failed', reason: 'wrong input value for the first envelope - value must be more than 0'});
    }
    if (!isValidValues2){
        validationErrors.push({ status: 'failed', reason: 'wrong input value for the second envelope'});
    }
    if (!isValidValuesGreaterThanZero2){
        validationErrors.push({ status: 'failed', reason: 'wrong input value for the second envelope - value must be more than 0'});
    }

    return validationErrors;
}

function isValidNumber(num) {
    return Number.isFinite(num) || Number(num);
}

function isValueGreaterThanZero(num) {
    return num > 0;
}

function fitInDiagonal(a, b, c, d) {
    return c > a && b >= (2 * c * d * a + (c * c - d * d) * Math.sqrt(c * c + d * d - a * a)) / (c * c + d * d);
}

