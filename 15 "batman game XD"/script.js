// Создать блок по центру экрана.При нажатии на стрелки –
// блок смещается в соответствующем направлении.Блок должен "упираться в экран", т.е.не может выйти за пределы экрана.
// 1) блок не вываливается за экран
// 2) при каждом "врезании" в стенку – блок отпрыгивает на step * 2 пикселей в противоположном направлении.
// 3) При каждом отпрыгивании – по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды

let hero = document.querySelector('.hero');

let keyFunction = {
    39: function () {
        if (hero.offsetLeft + hero.offsetWidth >= document.documentElement.clientWidth) {
            hero.style.left = (parseInt(hero.style.left) - 200) + 'px';
            hero.innerHTML = `<div class="alert">BAM!</div>`;
            setTimeout(function () {
                hero.innerHTML = ``;
            }, 2000);
        } else {
            hero.style.left = !hero.style.left ? '100px' : (parseInt(hero.style.left) + 100) + 'px';
        }
    },

    37: function () {
        if (hero.offsetLeft - hero.offsetWidth < document.documentElement.offsetLeft ) {
            hero.style.left = (parseInt(hero.style.left) + 200) + 'px';
            hero.innerHTML=`<div class="alert">BAM!</div>`;
            setTimeout(function () {
                hero.innerHTML = ``;
            }, 2000);
        } else {
            hero.style.left = !hero.style.left ? '100px' : (parseInt(hero.style.left) - 100) + 'px';
        }
    },

    38: function () {
        if (hero.offsetTop - hero.offsetHeight < document.documentElement.offsetTop) {
            hero.style.top = (parseInt(hero.style.top) + 200) + 'px';
            hero.innerHTML = `<div class="alert">BAM!</div>`;
            setTimeout(function () {
                hero.innerHTML = ``;
            }, 2000);
        } else {
            hero.style.top = !hero.style.top ? '100px' : (parseInt(hero.style.top) - 100) + 'px';
        }
    },

    40: function () {
        if (hero.offsetTop + hero.offsetHeight > document.documentElement.clientHeight) {
            hero.style.top = (parseInt(hero.style.top) - 200) + 'px';
            hero.innerHTML = `<div class="alert">BAM!</div>`;
            setTimeout(function () {
                hero.innerHTML = ``;
            }, 2000);
        } else {
            hero.style.top = !hero.style.top ? '100px' : (parseInt(hero.style.top) + 100) + 'px';
        }
    },

}

document.onkeydown = function (event) {
    keyFunction[event.keyCode] && keyFunction[event.keyCode]();
}
