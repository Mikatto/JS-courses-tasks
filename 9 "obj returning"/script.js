// Создать объект с такой структурой:
// obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } }
// Написать функцию convert(obj), которая получает аргументом obj.
// Функция должна вернуть новый объект:

// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

obj = {
    x: 10,
    y: 20,
    inner: { x: 20, z: 30 },
    foo2: { k: 23, p: 13 },
};

// Assign

withAssign = Object.assign({}, obj.x, obj.y, obj.inner, obj.foo2);
console.log(withAssign);

// Just for in

function convert(obj) {

    let newObj = obj;

    for (key in obj) {
        if (typeof obj[key] == `object`) {

            for (innerKey in obj[key]) {
                obj[innerKey] = obj[key][innerKey];
            }
            delete obj[key];
        }
    }

    return newObj;
}
console.log(convert(obj));

