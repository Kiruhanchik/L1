module.exports = function caseOfWord(number, word) { //файл-модуль для 4 задания
    let end = '';
    if (word[word.length - 2] == 'и') {  // каждый раз проверяю строку на символы
        if (number % 10 == 1 && number % 100 !== 11) {
            end = 'е'
         } else if ( (number % 10 === 2 && number % 100 !== 12) ||
         (number % 10 === 3 && number % 100 !== 13) ||
         (number % 10 === 4 && number % 100 !== 14)) {
             end = 'я'
         } else {
             end = 'й'
         }
    } else if (word[word.length - 2] == 'ч') {
        if (number % 10 == 1 && number % 100 !== 11) {
            end = 'a';
         } else if ( (number % 10 === 2 && number % 100 !== 12) ||
         (number % 10 === 3 && number % 100 !== 13) ||
         (number % 10 === 4 && number % 100 !== 14)) {
             end = 'и'
         } else {
             end = ''
         }
    } else if (word[word.length - 1] == 'ь' || word[word.length - 2] == 'л') {  // в этой задаче я реализовал проерку на несколько вариантов окончаний
        if (number % 10 == 1 && number % 100 !== 11) {
            end = 'ь';
         } else if ( (number % 10 === 2 && number % 100 !== 12) ||
         (number % 10 === 3 && number % 100 !== 13) ||
         (number % 10 === 4 && number % 100 !== 14)) {
             end = 'я'
         } else {
             end = 'ей'
         }
    }
    return number + ' ' + word.slice(0, -1) + end;
}   

