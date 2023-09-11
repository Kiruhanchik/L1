let moment = require('./moment'); // импорт либы

dates = () => {
    console.log(moment().format('DD MMM YYYY'));; // в этом модуле мы импортируем либу moment и экспортируем функцию
}                                                 // которая выводит нам дату в специальном формате 

module.exports = {dates}; // экспорт функции