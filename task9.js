const jsonToString = (json) => {
    if (typeof(json) === 'string') {
        return '"' + json.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';  // так как мне нельзя использовать метод stringify для преобразования в строку,
    } else if (typeof(json) === 'number') {                              // то я вручную обхожу весь JSON и преобразовываю его в строку, для этого узнаю какой тип и как будет выглядеть его строка
        return json.toString();                             // если на пути попадается массив, то тоже обхожу его рекурсивной функцией, как и с обьектом
    } else if (typeof(json) === 'boolean') {                // на выходе получаю строку
        return json ? 'true' : 'false';
    } else if (json === null) {
        return 'null';
    } else if (Array.isArray(json)) {
        let result = '[';
        for (let i = 0; i < json.length; i++) {
            if (i > 0) {
                result += ', ';
            }
            result += jsonToString(json[i]);
        }
        result += ']';
        return result;
    } else if (typeof(json) === 'object') {
        let result = '{';
        let keys = Object.keys(json);
        for (let i = 0; i < keys.length; i++) {
            if (i > 0) {
                result += ', ';
            }
            result += '"' + keys[i] + '": ' + jsonToString(json[keys[i]]);
        }
        result += '}';
        return result;
    }
}

let json = {
    "scill": "Fire",
    "name": "Eternal Flame",
    "age": 1000000,
    "bool": "true",
}

console.log(jsonToString(json)); // вызываю функцию 