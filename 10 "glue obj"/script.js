// Написать функцию assignObjects(obj1, obj2),
// которая принимает аргументами 2 объекта и возвращает новый,
// который состоит из свойств обоих объектов(склеить).
// Если свойство повторяется, то взять значение второго объекта


function assignObjects(obj1, obj2) {

    return withAssign = Object.assign({}, obj1, obj2);
}

assignObjects({ x: 10, y: 20 }, { z: 30 });
assignObjects({ x: 10 }, { x: 20, y: 30 });

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));
