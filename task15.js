const myFunc = async (url) => {
    const responce = await fetch(url);
    const param = await responce.status;  // вызываем асинхронную функцию, котоая всегда возвращает нам промис.
    return param;                         // внутри тела функции мы делаем асинхронный запрос фетч. А потом ожидаем получения статуса запроса
}                                         // и возвращаем его

myFunc('https://proza.ru/pics/2018/10/03/1345.jpg')
.then((param) => console.log(param)).catch((error) => console.log(error)) // далее используем цепочку промисов 