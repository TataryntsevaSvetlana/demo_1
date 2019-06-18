/*3.
Проверить является ли число или его часть палиндромом.
Например, число 1234437 не является палиндромом,
но является палиндромом его часть 3443.
Числа меньшие, чем 10 палиндромом не считать.

Входные параметры: число
Выход: извлечённый из числа палиндром либо 0, если извлечение не удалось.

*/

function getPalindrome(inputNumber) {
    const validationErrors = isValidNumber(inputNumber);
    let results = [0];

    if (validationErrors.length === 0) {
        if (!isPalindrome(inputNumber)) {
            const string = String(inputNumber);
            const symbolsQuantity = string.length;

            for (let i = 0; i < symbolsQuantity; i++) {
                for (let k = 0; k < symbolsQuantity; k++) {
                    const numberFromStart = string.slice(i, symbolsQuantity - k);
                    const numberFromEnd = string.slice(k, symbolsQuantity - 1);

                    if (isPalindrome(numberFromEnd)) {
                        results.push(Number(numberFromEnd));
                    }

                    if (isPalindrome(numberFromStart)) {
                        results.push(Number(numberFromStart));
                    }
                }
            }
        } else {
            results.push(Number(inputNumber));
        }
        return Math.max(...results);

    } else {
        return validationErrors;
    }
}
console.log(getPalindrome('74575sveta'));




function isValidNumber(num) {
    const isValidValue = Number.isFinite(num) || Number(num);
    const isValueGreaterThanZero =  num > 0;
    const isValidLength = String(num).length <= 16;
    const validationErrors = [];

    if (!isValidValue){
        validationErrors.push({ status: 'failed', reason: 'the entered value is not a number'});
    }
    if (!isValueGreaterThanZero){
        validationErrors.push({ status: 'failed', reason: 'the entered value must be more than 0'});
    }
    if (!isValidLength){
        validationErrors.push({ status: 'failed', reason: 'input number must be less than 17 characters'});
    }

    return validationErrors;
}

function isPalindrome(inputNumber) {
    let reversed = String(inputNumber).split('').reverse().join('');

    return Number(inputNumber) > 10 && reversed === String(inputNumber);
}