const stringToJson = (str) => {
    let json = null;
    if (str[0] === '{' && str[str.length - 1] === '}') {
        let jsonStr = str.slice(1, -1);
        let pairs = jsonStr.split(','); // разбиваем на массив строк с разделителем ','
        json = {};
        for (let pair of pairs) { // в цикле собираем пары ключ-значение
            let [key, value] = pair.split(': '); // ставим разделитель
            key = key.trim(); // удаляем из ключа пробелы с конца и начала
            value = value.trim(); // удаляем из значения пробелы с конца и начала
            if (value[0] === '"' && value[value.length - 1] === '"') { // ессли у значения первый и последний символ кавычки
                value = value.slice(1, -1).trim(); // убираем их и убираем пробелы в начале и конце
                json[key] = value; 
            } else {
                json[key] = isNaN(value) ? (value === true ? true : (value === false ? false : value)) : Number(value);
            }
        }
    } 
    return json; // возвращаем JSON
}

const str = '{"skill": "Fire", "name": "Eternal Flame", "age": 1000000, "bool": "true"}';

console.log(stringToJson(str)); // вызываем функцию