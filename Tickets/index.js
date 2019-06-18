/*	
Есть 2 способа подсчёта счастливых билетов:
1. Простой — если на билете напечатано шестизначное число, и сумма первых трёх цифр равна сумме последних трёх, то этот билет считается счастливым.
2. Сложный — если сумма чётных цифр билета равна сумме нечётных цифр билета, то билет считается счастливым.
Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале. 

Входные параметры: объект context с полями min и max
Выход: объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта.


*/

function getWinner(context) {
    const validationErrors = isValidInput(context);

    if (validationErrors.length === 0) {
        const NUMBER_LENGTH_TICKET = 6;
        let simpleCounter = 0;
        let complicatedCounter = 0;

        for (let i = context.min; i <= context.max; i++) {
            let ticket = String(i);
            if (ticket.length < NUMBER_LENGTH_TICKET) {
                ticket = ticket.padStart(NUMBER_LENGTH_TICKET, "0");
            }

            let ticketNumbers = ticket.split('');
            simpleCounter += simpleCounting(ticketNumbers);
            complicatedCounter += complicatedCounting(ticketNumbers);
        }

        const winner = (simpleCounter > complicatedCounter) ? 'simple method' : 'complicated method';

        return {
            winner,
            simple: simpleCounter,
            complicated: complicatedCounter
        };

    } else {
            return validationErrors;
    }
}

const context = {min: 100100, max: 100102 };

console.log(getWinner(context));


function isValidInput(obj) {
    const { min, max } = obj;
    const isMinValid = Number.isFinite(min) || Number(min);
    const isMaxValid = Number.isFinite(max)  || Number(max);
    const isMinGreaterThanZero =  min > 0;
    const isMaxGreaterThanMin =  min < max;
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

    return validationErrors;
}

function sumValue(arr) {
    return arr.reduce((acc, curr) => acc + Number(curr), 0);
}

function simpleCounting(arr) {
    let sum1 = [];
    let sum2 = [];

    arr.forEach((el, i) => {
        (i < arr.length / 2) ? sum1.push(el) : sum2.push(el);
    });

    return (sumValue(sum1) === sumValue(sum2)) ? 1 : 0;
}

function complicatedCounting(arr) {
    let evenNumbersSum = [];
    let oddNumbersSum = [];

    arr.forEach(el => {
        (el % 2 === 0) ? evenNumbersSum.push(el) : oddNumbersSum.push(el);
    });

    return (sumValue(evenNumbersSum) === sumValue(oddNumbersSum)) ? 1 : 0;
}







