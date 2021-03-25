Given three arrays kitchenProducts, devicesProducts, cosmeticsProducts with products in different categories:

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
price: [100,1000]
},
{
type: 'laptop',
price: [50,1500]
},
{
type: 'smartphone',
price: [80.2000]
},
{
type: 'tablet',
price: [20,1300]
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


A task:
For each category, create an object that has only one property category, which contains the name of the category. For example, let Kitchen = {category: 'kitchen'};
To all products from the kitchenProducts, devicesProducts, cosmeticsProducts arrays, add the objects created in the first step as a prototype object. After that, add your own properties to each product.