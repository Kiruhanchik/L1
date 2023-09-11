const wrapperFunc = () => { // функция оболочка
    let count = 0;
    return innerFunc = () => { // возвращаем внутреннюю функцию в замыкании с переменной count
        return count += 1;
    }
}

let newFunc = wrapperFunc();  // тут переменная count не умирает после окончания работы внешней функции так как находится в замыкании с внутренней функцией
console.log(newFunc()); // 1
console.log(newFunc()); // 2
console.log(newFunc()); // 3
console.log(newFunc()); // 4
console.log(newFunc()); // 5
console.log(newFunc()); // 6