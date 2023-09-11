const urlPromise = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((responce) => {
            if (responce.ok) { // если запрос успешен
                resolve('промис разрешается с данными об изображении');
            } else {
                reject(new Error("ошибка при получении данных изображения"));  // я возвращаю промис. Если при отправке запроса успешно
            }                                                                  // успешно получаю ответ, значит выполняется resolve
        })                                                                     // а иначе вылетает реджект с ошибкой, что ответ не удалось получить
        .catch((error) => {
            reject(error);
        })
    });
}

urlPromise('https://proza.ru/pics/2018/10/03/1345.jpg')  // отправляю запрос на картинку в инете
.then((result) => console.log(result)) // вывожу результат
