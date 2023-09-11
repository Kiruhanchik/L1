const funcWrapper = (arr) => {
    let array = [];
    return callFunctions = (n) => {                                             // функция вызова всех функций
        return arr.reduce((promise, currentFunction) => {                       // чтобы запускать функцию после успешного выполнения предыдущей я воспользовался цепочкой промисов
            return promise.then(() => array.push(currentFunction(n)));          // с замыканием с массивом результов вызовов
        }, Promise.resolve()).then(() => console.log(array));
    }                                                                           // здесь тоже сделал через промисы, взял кусок кода из прошлого задания
}                                                                               // логика такая, что возращается функция, которая внутри выполняет функции и пушит значения в массив
                                                                                // после успешного выполнения я вывожу полученный массив
let myFunctions = [
    function My1(n) {
        return n;
    },
    function My2(n) {
        return n + 1;  // массив с моими функциями 
    },
    function My3(n) {
        return n + 2;
    },
    function My4(n) {
        return n + 3;
    },
    function My5(n) {
        return n + 4;
    }, 
    function My6(n) {
        return n + 5;
    },
]

console.log(funcWrapper(myFunctions)(1));