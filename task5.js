const singlyLinkedList = (json) => {
    let data = json;
    let node = null;
    let head = null;
    for (let i = Object.keys(data).length - 1; i >= 0; i--) {  // здесь перебираю обьект с конца, делаю узел из обьекта со значением и ссылкой на след обьект
        node = {value: data[Object.keys(data)[i]], next: head}; // создаю узел - обьеект со значением внутри котрого eсть ссылка на другой обьект
        head = node; // делаем текущий узел головой списка
    }
    return head; // возвращаем голову
}

let json = {   // наш JSON
        "scill": "Fire",
        "name": "Eternal Flame",
        "age": 1000000,
}                                 // в конце получаю структуру односвязного списка из jsonа

console.log(singlyLinkedList(json));  // вывод: {
                                    //            value: 'Fire',
                                   //             next: { 
                                          //           value: 'Eternal Flame', 
                                           //          next: { 
                                          //               value: 1000000, 
                                          //               next: null 
                                           //          } 
                                          //      }
                                     //         }