/*	
Вывести все числа Фибоначчи,
которые удовлетворяют переданному в функцию ограничению:
находятся в указанном диапазоне, либо имеют указанную длину.

Входные параметры: объект context с полями min и max, либо с полем length 
Выход: массив чисел

*/


function getFibonacciNumbersInRange(context) {
    const validationErrors = isValidInput(context);

    if (validationErrors.length === 0) {
        let f1 = 0, f2 = 1, f3 = 1;
        let result = [];

        while (f1 <= context.max) {
            if (f1 >= context.min) {
                if (context.length && String(f1).length === context.length) {
                    result.push(f1);
                } else if (!context.length) {
                    result.push(f1);
                }
            }
            f1 = f2;
            f2 = f3;
            f3 = f1 + f2;
        }
        return result;
    } else {
        return validationErrors;
    }
}

const context = { min: 'bvbv', max: 100, length: 2};
console.log(getFibonacciNumbersInRange(context));


function isValidInput(obj) {
    const { min, max, length } = obj;
    const isMinValid = Number.isFinite(min) || Number(min);
    const isMaxValid = Number.isFinite(max) || Number(max);
    const isMinGreaterThanZero =  min >= 0;
    const isMaxGreaterThanMin =  min < max;
    const isValidLength = length === undefined || length > 0;
    const validationErrors = [];

    if (!isMinValid){
        validationErrors.push({ status: 'failed', reason: 'wrong input value - min'});
    }
    if (!isMaxValid){
        validationErrors.push({ status: 'failed', reason: 'wrong input value - max'});
    }
    if (!isMinGreaterThanZero){
        validationErrors.push({ status: 'failed', reason: 'wrong input value min - value must be more than 0'});
    }
    if (!isMaxGreaterThanMin){
        validationErrors.push({ status: 'failed', reason: 'wrong input value max - value must be greater than min'});
    }
    if (!isValidLength){
        validationErrors.push({ status: 'failed', reason: 'wrong input value - length'});
    }

    return validationErrors;
}








