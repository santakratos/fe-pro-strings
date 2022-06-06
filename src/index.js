/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
    let output = '';
    for (let letter of string) {
        if (letter.toLowerCase() === 'z' || letter.toLowerCase() === 'v') {
            letter = '*';
        }
        output = `${output}${letter}`;
    }
    return output;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
    const strartPosition = string.indexOf(word);
    const endPosition = word.length;
    const firstPartString = string.slice(0, strartPosition);
    const secondPartString = string.slice(strartPosition + endPosition);
    const changeString = `${firstPartString}${newWord}${secondPartString}`;
    return changeString;
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
    return string.slice(0, length);
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
    const getLowerCaseString = string.toLowerCase();
    const getLowerCaseSymbol = symbol.toLowerCase();
    let symbolsCounter = 0;
    for (let i = 0; i < getLowerCaseString.length; ++i) {
        if (getLowerCaseString[i] === getLowerCaseSymbol) {
            ++symbolsCounter;
        } else {
            continue;
        }
    }
    return symbolsCounter;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
    const getLowerCaseString = string.toLowerCase();
    const getLowerCaseSymbol = symbol.toLowerCase();
    let symbolsCounter = 0;
    let i = 0;

    while (true) {
        const numberIndexOf = getLowerCaseString.indexOf(getLowerCaseSymbol, i);
        if (numberIndexOf !== -1) {
            ++symbolsCounter;
            i = numberIndexOf + 1;
        } else {
            break;
        }
    }
    return symbolsCounter;
};