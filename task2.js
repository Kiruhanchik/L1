const strangeValue = (value) => {
    let sum = 0;
    for (let i = 1; i < +value; i++) { // создал переменную под сумму делителей и в конце проверяю
        if (+value % i == 0) {
            sum += i;
        }
    }
    if (sum == +value) { // если число равно сумме своих делителей, то возвращаем правду
        return true;
    }
    return false; // иначе ложь
}

console.log(strangeValue(28));