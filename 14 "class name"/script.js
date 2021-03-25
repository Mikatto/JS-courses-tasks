// Написать скрипт, который добавит класс`last` всем последним li в группах.
let last = document.querySelectorAll('.root li:last-of-type');

last.forEach(function (lastLi) {
    setTimeout(function () {
        lastLi.classList.add('last');
    }, 2000);
});

// Написать функцию setFirstItemClassName(level), где level
// - это номер уровня вложенности, в котором нужно произвести изменения.
// Функция setFirstItemClassName должна установить первому тегу группы
// - класс`first-item`
// * при добавлении классов - должен изменится цвет фона
// на красный(first) и зеленый(last), с анимацией - задержка 2 секунды

let first = document.querySelectorAll('ul');

function setFirstItemClassName(level) {
    
    level.forEach(function (levelOne) {
        let FirstChildColor = levelOne.firstElementChild;
        setTimeout(function () {
            FirstChildColor.classList.add(`first-item`);
        }, 2000);
    })
};

setFirstItemClassName(first);