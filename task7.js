let myFunctions = [
    function My1(n) {
        console.log(n);
    },
    function My2(n) {
        console.log(n + 1);  // массив с моими функциями 
    },
    function My3(n) {
        console.log(n + 2);
    },
    function My4(n) {
        console.log(n + 3);
    },
    function My5(n) {
        console.log(n + 4);
    }, 
    function My6(n) {
        console.log(n + 5);
    },
]

const callFunctions = (n) => {  // функция вызова всех функций
    return myFunctions.reduce((promise, currentFunction) => {   // чтобы запускать функцию после успешного выполнения предыдущей я воспользовался цепочкой промисов
        return promise.then(() => currentFunction(n));          
    }, Promise.resolve());
}

callFunctions(1).then(() => {
    console.log("Все функции выполнены успешно"); // после успешного выполнения функций, выводим это
  }).catch((error) => {
    console.error("Ошибка при выполнении функций:", error);  // если ловим ошибку, выводим это
  });