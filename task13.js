class Shape {  // обьявляю абстрактный класс фигуры
    name;
    constructor (name) {
        this.name = name;
    }
    perimetr() {
        return 'Не определено'; // эти методы пока на данном этапе не определены
    };
    ploshad() {
        return 'Не определено'; 
    };
}

class Rectangle extends Shape { // создаю потомка - подкласс прямоугольник
    width;
    height;
    constructor (name, width, height) { // прописываем контструктор
        super(name); // обязательно вызываем для имени родительский метод
        this.width = width;
        this.height = height;
    }
    perimetr() {
        return 'Периметр = ' + (2 * (this.width + this.height)); // метод периметра
    };
    ploshad() {
        return 'Площадь = ' + (this.width * this.height); // метод площади
    };
};

class Circle extends Shape { // создаю потомка - подкласс круг
    rad;
    constructor (name, rad) {
        super(name);
        this.rad = rad; // указываю радиус
    }
    perimetr() {
        return 'Периметр = ' + (2 * Math.PI * this.rad);
    };
    ploshad() {
        return 'Площадь = ' + (Math.PI * this.rad * this.rad); 
    };
};

class Triangle extends Shape {
    side1;
    side2;
    side3;
    constructor (name, side1, side2, side3) {
        super(name);
        this.side1 = side1; // все стороны треугольника
        this.side2 = side2;
        this.side3 = side3;
    }
    perimetr() {
        return 'Периметр = ' + (this.side1 + this.side2 + this.side3);
    };
    ploshad() {
        let poluPerimetr = (this.side1 + this.side2 + this.side3) / 2;
        return 'Площадь = ' + (Math.sqrt(poluPerimetr * (poluPerimetr - this.side1) * (poluPerimetr - this.side2) * (poluPerimetr - this.side3))); 
    };
};

let myRectangle = new Rectangle('прямоугольник', 3, 7); // создаю экземпляры подклассов
let myCircle = new Circle('круг', 2);
let myTriangle = new Triangle('треугольник', 3, 7, 9);

console.log(myRectangle.perimetr()); // вызываю методы экземпляров
console.log(myCircle.perimetr());
console.log(myTriangle.perimetr());
console.log(myRectangle.ploshad());
console.log(myCircle.ploshad());
console.log(myTriangle.ploshad());