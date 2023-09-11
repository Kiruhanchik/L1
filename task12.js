let book = {
    set name(newName) {
        this.name = newName;
    },
    set athor(newAthor) {
        this.athor = newAthor;
    },
    set year(newYear) {
        this.year = newYear;  // метод set указывает, что менять при его вызове
    },
    name: 'Psycho',
    athor: 'Kirill Ivanov',
    year: 1998
}

console.log(book.name); // выводим имя 
book.name = 'Ressel'; // меняем свойство name
console.log(book.name); 
console.log(book.year);
book.year = 2002; // меняем свойство age
console.log(book.year);

// я специально сделал все сеттеры сначала, т.к. если сделать их после обьявления свойств, то провалимся в рекурсию и переполение стека
// потому что один сеттер будет автоматом вызывать себя еще раз и еще раз