/*	
Вывести через запятую ряд длиной n,
состоящий из натуральных чисел, квадрат которых не меньше заданного m.

Входные параметры: длина и значение минимального квадрата
Выход: строка с рядом чисел
*/

function getNumericSequence(n, m) {
    const validationErrors = isValidValues(n, m);

    if (validationErrors.length === 0) {
        let number = Math.sqrt(m);
        let firstValue = Math.ceil(number);

        let arr = [];
        let i = 0;

        while (i < n) {
            arr.push(firstValue + i);
            i++;
        }
        return arr.join(', ');

    } else {
        return validationErrors;
    }
}

console.log(getNumericSequence(0, 14));

function isValidValues(number1, number2) {
    const isValidValue1 = Number.isFinite(number1) || Number(number1);
    const isValidValue2 = Number.isFinite(number2) || Number(number2);
    const isValue1GreaterThanZero =  number1 > 0;
    const isValue2GreaterThanZero =  number2 > 0;
    const validationErrors = [];

    if (!isValidValue1){
        validationErrors.push({ status: 'failed', reason: 'the entered first value is not a number'});
    }
    if (!isValidValue2){
        validationErrors.push({ status: 'failed', reason: 'the entered second value is not a number'});
    }
    if (!isValue1GreaterThanZero){
        validationErrors.push({ status: 'failed', reason: 'the entered first value must be more than 0'});
    }
    if (!isValue2GreaterThanZero){
        validationErrors.push({ status: 'failed', reason: 'the entered second value must be more than 0'});
    }

    return validationErrors;
}






