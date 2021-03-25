// Создать класс SuperMath с методом check(obj), параметр obj которого имеет свойства X, Y, znak.

// Пример объекта: obj = { X: 12, Y: 3, znak: “/”}, возможные варианты znak => + - / * %.
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.

// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak(которое описано в классе),
// иначе - запросить ввод новых данных через метод input() с класса SuperMath.

let operations = {
    '+': function (X, Y) {return X + Y},
    '-': function (X, Y) {return X - Y},
    '/': function (X, Y) {return X / Y},
    '*': function (X, Y) {return X * Y},
};

function makeOperation(X, Y, znak) {
    return operations[znak](X, Y);
}

class SuperMath{
    constructor(X,Y,znak){ 
    this.X = X;
    this.Y = Y;
    this.znak = znak;
    }

    check() {
        let whatIsNext = confirm(`Будем считать ${this.X}${this.znak}${this.Y} ?`);

        if (whatIsNext==true) {
            let math = makeOperation(this.X, this.Y, this.znak);
            alert(`Получается ${math} , на этом всё`)

        } else {
            this.input()
        }
    }

    input() {
        this.X = +prompt(`Как хочешь, тогда введи первое число`, 2);
        this.znak = prompt(`Что хочешь с ним сделать? P.S. можно только ( + - / * )`, '+');
        
        if (operations[this.znak]) {
            this.Y = +prompt(`Второе число`, 2);
            let math = makeOperation(this.X, this.Y, this.znak);
            alert(`Получается ${math} , всё, расходимся`);
        } else {
            alert(`Ну и кому я писал про допустимые знаки? Можно только ( + - / * ). Давай заново!`);
            return this.input()
        };
    }
}

p = new SuperMath(3,3,'/');
p.check();