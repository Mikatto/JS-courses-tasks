let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];
let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];
let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

// ----------------------------------------------------------------

class Prod{
    constructor(category) {
        this.category = category;
    }
    render() {
        let productDiv = `<div class="card">
        <img class="image" src="images/${this.category}/${this.type}.svg" alt="${this.type}">
        <div class="card-info">name <span class="product-info">${this.type.toUpperCase()}</span></div>
        <p class="card-info">price <span class="product-info">$ ${Array.isArray(this.price) ? this.price.join('--') : this.price}</span></p>
        </div>`
        return productDiv;
    }
}
// >-------->------>
let kitchen = new Prod("kitchen", kitchenProducts);
let devices = new Prod("devices", devicesProducts);
let cosmetics = new Prod("cosmetics", cosmeticsProducts);

// ----------------------------------------------------------------

function addProt(array, proto) {
    let arrayProto = array.map(function (product) {
        let newProduct = Object.create(proto);
        for (let key in product) {
            newProduct[key] = product[key];
        }
        return newProduct;
    })
    console.log(arrayProto);
    return arrayProto;
}

function renderProduct(arr) {
    return arr.map(function (product) {
        return product.render()
    })
}
// >-------->------>
let kitchenProto = addProt(kitchenProducts, kitchen);
let deviceProto = addProt(devicesProducts, devices);
let cosmeticsProto = addProt(cosmeticsProducts, cosmetics);

// ----------------------------------------------------------------

function renderCategory(arr) {
    document.write(`
    <div class="category">
        <h2>Category ${arr[0].category}</h2>
        <div class="cards-row">
        ${renderProduct(arr).join('')}
    </div>
    </div>
`)
}
// >-------->------>
renderCategory(kitchenProto);
renderCategory(deviceProto);
renderCategory(cosmeticsProto);

// ----------------------------------------------------------------