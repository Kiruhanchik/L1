const checkPassword = (password) => {
    let hard = 0; // сложность 
    let reason = ''; // причины 
    if (password.length >= 10) {
        hard += 2;
    } 
    else if (password.length < 10) { // проверка длины пароля
        reason += 'Увеличьте длину пароля' + '\n';
    }
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        hard += 2;
    } else if (!(/[a-z]/.test(password) && /[A-Z]/.test(password))) {
        reason += 'В пароле должны быть заглавные и прописные буквы' + '\n';  // проверяю пароль на соответствие критериям с помощью регулярок и изменяю сложность, добавляю причины
    }
    if (/\d/.test(password)) { // проверка наличия цифр в пароле
        hard += 2;
    } else if (!(/\d/.test(password))) {
        reason += 'В пароле должны быть цифры' + '\n';
    }
    if (/[.,!@#$%^&*]/.test(password)) { // проверка наличия спецсимволов в пароле
        hard += 2;
    } else if (!(/[.,!@#$%^&*]/.test(password))) {
        reason += 'В пароле должны быть спецсимволы' + '\n';
    }

    if (hard <= 4) { // оценка сложности пароля
        console.log('Сложность пароля = ' + hard + ' (низкая)');  // в зависимости от полученной сложности вывожу пользователю ее и пишу предложения
        console.log('Предложения:' + '\n' + reason);
    } else if (hard <= 6) {
        console.log('Сложность пароля = ' + hard + ' (средняя)');
        console.log('Предложения:' + '\n' + reason);
    } else {
        console.log('Ваш пароль отличный!');
    }
}

checkPassword('huhHu8');