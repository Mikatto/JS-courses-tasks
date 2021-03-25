// Сеть фастфудов предлагает несколько видов гамбургеров:
// маленький(5$, 20 калорий)
// большой(10$, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок:
// сыром(+ 1$, + 20 калорий)
// салатом(+ 2$, + 5 калорий)
// картофелем(+ 1, 5$, + 10 калорий)
// Можно добавить добавки:
// посыпать приправой(+ 1, 5$, 0 калорий)
// полить майонезом(+ 2$, + 5 калорий).
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
// Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER
// (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций и расчета нужных величин.

const hamburgerInfo = {
    size: {
        small: {
            name: 'small',
            price: 5,
            cal: 20,
        },

        big: {
            name: 'big',
            price: 10,
            cal: 40,
        },
    },
    filling: {
        cheese: {
            name: 'cheese',
            price: 1,
            cal: 20,
        },

        salad: {
            name: 'salad',
            price: 2,
            cal: 5,
        },

        potato: {
            name: 'potato',
            price: 1.5,
            cal: 10,
        },
    },
    additive: {
        flavoring: {
            name: 'flavoring',
            price: 1.5,
            cal: 0,
        },

        mayo: {
            name: 'mayo',
            price: 2,
            cal: 5,
        },
    },
};

class HamburgerBuilder{
    constructor(size, filling,additive) {
        this.size = size;
        this.filling = filling;
        this.additive = additive;
    }

//----------------------MAIN INFO----------------------
    getSize() {
        return this.size;
    }

    setSize(size) {
        this.size = size;
    }

//----------------------FILLING-------------------------
    getFilling() {
        return this.filling;
    }

    setFilling(fill) {
        this.filling.push(fill);
    }

//----------------------ADDITIVE-------------------------
    getAdditive() {
        return this.additive;
    }

    setAdditive(add) {
        this.additive.push(add);
    }

//----------------------TOTAL----------------------------

    setPrice() {
        let priceTotal = this.size.price;
        priceTotal += this.filling.price;
        priceTotal += this.additive.price;
        return priceTotal;
    }

    setCal() {
        let calTotal = this.size.cal;
        calTotal += this.filling.cal;
        calTotal += this.additive.cal;
        return calTotal;
    }


//----------------------RESULT---------------------------
    getResult() {
        return `Your's hamburger is ${this.size.name} ${this.size.cal}kl. $${this.size.price}
        ______________________________
        It include:
        ${this.filling.name} ${this.filling.cal}kl. $${this.filling.price}
        ${this.additive.name} ${this.additive.cal}kl. $${this.additive.price}
        ______________________________
        TOTAL: ${this.setCal()} kl. | $ ${this.setPrice()}`;
    }
};
let nh = new HamburgerBuilder(hamburgerInfo.size.small, hamburgerInfo.filling.potato, hamburgerInfo.additive.mayo);
console.log(nh.getResult());
