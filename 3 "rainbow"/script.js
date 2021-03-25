hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];

rainbow = hero.concat(native, destination);
rainbow.reverse();

hero = rainbow.slice([4]);
native = rainbow.slice([2], [4]);
battle = [`Gave`, `Battle`];
destination = rainbow.slice([0], [2]);
hero = [`Richard`];

rainbow = hero.concat(native, battle, destination);

rainbow.pop();
rainbow.push(`Vain`);
console.log(rainbow);

colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet'];

for (i = 0; i < colors.length; i++) {
    document.write('<div class="element">');
    document.write(`<div class="circle ${colors[i]}"></div>`);
    document.write('<div class="title">' + rainbow[i] + '</div>')
    document.write('</div>')
}