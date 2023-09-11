const sortArray = (arr) => {
    arr.sort((a, b) => { // метод сортировки 
        if (a.age === b.age) {
            return  a.name > b.name ? 1 : -1;  // если возраст разный, то сортирую по его увелечению, если одинаковый то по строке имени
        } else {     
            return a.age > b.age ? 1 : -1;  
        }
    });
    return arr; // возвращаем отсортированный массив
}

let array = [
    {
        name: 'Kirill',
        age: 25
    },
    {
        name: 'Aaria',
        age: 18
    },
    {
        name: 'Cad',
        age: 18
    },
    {
        name: 'Bose',
        age: 18
    },
    {
        name: 'Dim',
        age: 22
    },
]

console.log(sortArray(array));  // [  Получем 
                                //        { name: 'Aaria', age: 18 },
                                //        { name: 'Bose', age: 18 },
                                //        { name: 'Cad', age: 18 },
                                //        { name: 'Dim', age: 22 },
                                //        { name: 'Kirill', age: 25 }
                                // ]