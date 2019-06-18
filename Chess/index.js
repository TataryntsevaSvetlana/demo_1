
/*1.	Шахматная доска
Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
  *  *  *  *  *  *
*  *  *  *  *  *
  *  *  *  *  *  *
*  *  *  *  *  *

Входные параметры: длина, ширина, символ для отображения.
Выход: строка с представлением шахматной доски
*/

function showChessBoard(width, height, char) {
    const validationErrors = isValidValues(width, height, char);
    let result;

    if (validationErrors.length === 0) {
        let board = '\n';

        for (let currentRow = 0; currentRow < height; currentRow++) {
            if (currentRow % 2 === 0) {
                board += ' ';
            }
            for (let currentCol = 0; currentCol < width; currentCol++) {
                if (currentCol % 2 === 0) {
                    board += ' ';
                } else {
                    board += char;
                }
            }
            board += '\n';
        }
        result = board;
    } else {
        result = validationErrors;
    }

    return result;
}

console.log(showChessBoard('10', 4, '*'));

function isValidValues(width, height, symbol) {
    const isWidthValid = Number.isFinite(width) || Number(width);
    const isHeightValid = Number.isFinite(height) || Number(height);
    const isValidSymbol = String(symbol).length === 1;
    const validationErrors = [];

    if (!isWidthValid){
        validationErrors.push({ status: 'failed', reason: 'wrong input values - width'});
    }
    if (!isHeightValid){
        validationErrors.push({ status: 'failed', reason: 'wrong input values - height'});
    }
    if (width <= 0 || height <= 0) {
        validationErrors.push({ status: 'failed', reason: 'wrong input values - values must be more than 0'});
    }
    if (!isValidSymbol) {
        validationErrors.push({ status: 'failed', reason: 'wrong input values - symbol' });
    }

    return validationErrors;
}











