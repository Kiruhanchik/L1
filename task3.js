let MathX = {
    FibonachiN: (n) => {     // пишем методы обьекта MathX
        let cache = [0, 1];
        FibonachiNInner = (n) => {
            if (n <= 2) {
                return cache[n-1];
            } else {
                if (cache[n]) {
                    return cache[n];
                } else {
                    cache[n] = FibonachiNInner(n - 2) + FibonachiNInner(n - 1); // здесь использую рекурсию и замыкакание с переменной кеша, 
                    return cache[n];                                            // чтобы не проводить повторных вычислений, а брать значение из кеша, 
                }                                                               // если оно уже было найдено ранее. Рекурсия выполняется чуток быстрее цикла
            }
        }
        return FibonachiNInner(n);
    },
    FibonachiAllN: (n) => {
        let row = [0, 1]; // начальные значения ряда Фибоначчи
        FibonachiAllNInner = (n) => {
            if (n <= 1) {
                return n - 1;  // здесь использовал замыкание с массивом чисел Фибоначчи
            }  else {
                for (let i = 2; i < n + 1; i++) {
                    if ((row[i - 2] + row[i - 1]) >= n) {
                        break;
                    }
                    row.push(row[i - 2] + row[i - 1]);
                }   
                return row;             
            }
        }
        return FibonachiAllNInner(n);
    },
    PrimeNumberN: (n) => {
        let numbers = [2]; // массив с уже вычисленными простыми числами
        PrimeNumberNInner = (n) => {
            if (n <= 1) {
                return 'Введите число больше 1';
            } else {
                if (n <= numbers.length) {
                    return numbers[n - 1]; // если число уже есть в массиве простых чисел, то его не вычисляем, а сразу выводим
                }
                let num = numbers[numbers.length - 1];
                while (numbers.length < n) { // в этом цикле перебиаем все числа до n и если оно просто, то заносим в наш массив
                    num += 1;                // внутренняя функция замыкается с массивов numbers
                    let isPrime = true;
                    for (let i = 0; i < numbers.length; i++) {
                        if (num % numbers[i] == 0) {
                            isPrime = false;  // ставим, что число не явл. простым и выходим из цикла
                             break;
                        }
                    }
                    if (isPrime) {
                        numbers.push(num); // проверяем, что оно простое и добавлем в массив
                    }
                }
                return numbers[n - 1];
            }
        }
        return PrimeNumberNInner(n);
    },
    PrimeNumberAllN: (n) => {
        let numbers = [2];
        PrimeNumberAllNInner = (n) => {
            if (n == 3) {
                return numbers[0];
            } else {
                let num = numbers[numbers.length - 1];
                while (numbers.length < n) { // в этом цикле перебиаем все числа до n и если оно просто, то заносим в наш массив
                    num += 1;                // внутренняя функция замыкается с массивов numbers
                    let isPrime = true;
                    for (let i = 0; i < numbers.length; i++) {
                        if (num % numbers[i] == 0) {
                            isPrime = false;  // ставим, что число не явл. простым и выходим из цикла
                             break;
                        }
                    }
                    if (num >= n) {
                        break; // проверяем, что оно простое и меньше n, тогда добавлем в массив
                    } else if (isPrime) {
                        numbers.push(num)
                    }
                }
                return numbers;
            }
        }
        return PrimeNumberAllNInner(n);
    }
}

console.log(MathX.FibonachiAllN(5)); // [ 0, 1, 1, 2, 3 ]
console.log(MathX.PrimeNumberAllN(10));