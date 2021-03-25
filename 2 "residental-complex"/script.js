const divClassWrapper = (`<div class="wrapper">`);
const divClassContainer = (`<div class="container">`);
const divClosed = (`</div>`);

const road = (`<div class="road">
                <div class="line">
                    <div class="line_separator"></div>
                </div>
                </div>`);

const tree = (`<div class="tree"></div>`);
const treeSecond = (`<div class="tree tree_second"></div>`);
const treeThird = (`<div class="tree tree_third"></div>`);

const swimmer = (`<div class="swimmer"></div>`);

const roadHorizontal = (`<div class="wrapper">
<div class="road road__horizontal">
<div class="line line_horizontal">
<div class="line_separator"></div></div></div></div>`);

const park = (`<div class="area area__park"></div>`);

let garages = [];
let cars = [`first`, `second`, `third`, `fourth`];

let houses = [];
let houseColor = [`blue`, `pink`, `purple`];
let houseRotate = [`degreesm90`, `degrees90`, `degrees180`];

let leisure = [];
let zones = [`zone__football`, `zone__whale`, `zone__ice-hockey`];


// -------------------- GARAGES

for (let i = 1; i <= 3; i++) {

    if (i==1) {
        car = `<div class="car ${cars[0]}"></div>
        <div class="car ${cars[1]}"></div>`;

    } else if (i == 2) {

        car = `<div class="car ${cars[2]}"></div>
        <div class="car ${cars[3]}"></div>
        <div class="car ${cars[1]}"></div>`;

    } else if (i == 3) {
        
        car = `<div class="car ${cars[3]}"></div>
        <div class="car ${cars[0]}"></div>`;
    }

    garage = `${road}<div class="area area__garage">${car}</div>`;
    garages.push(garage);

}

// -------------------- HOUSES

for (let j = 1; j <= 3; j++) {

    color = houseColor[j - 1];

    if (j == 1) {

        houseLineOne = `
        <div class="home ${color}"></div>
        <div class="home ${color}"></div>`

        houseLineTwo = `
        <div class="home ${color} ${houseRotate[0]}"></div>
        <div class="home ${color} ${houseRotate[1]}"></div>`

        houseLineThree = `
        <div class="home ${color} ${houseRotate[2]}"></div>
        <div class="home ${color} ${houseRotate[2]}"></div>`;
    
    } else if (j == 2) {

        houseLineOne = `
        <div class="home ${color}"></div>
        <div class="home ${color}"></div>`

        houseLineTwo = `
        <div class="home ${color} ${houseRotate[0]}"></div>
        <div class="home ${color} ${houseRotate[1]}"></div>`

        houseLineThree = `
        <div class="home ${color} ${houseRotate[2]}"></div>
        <div class="home ${color} ${houseRotate[2]}"></div>`;

    } else if (j == 3) {

        houseLineOne = `
        <div class="home ${color}"></div>
        <div class="home ${color}"></div>`

        houseLineTwo = `
        <div class="home ${color} ${houseRotate[0]}"></div>
        <div class="home ${color} ${houseRotate[1]}"></div>`

        houseLineThree = `
        <div class="home ${color} ${houseRotate[2]}"></div>
        <div class="home ${color} ${houseRotate[2]}"></div>`;

    }

    house = `${road}<div class="area area__home">
    ${tree} ${treeSecond} ${treeThird}
    <div class="line-house">${houseLineOne}</div>
    <div class="line-house line-house__between">${houseLineTwo}</div>
    <div class="line-house">${houseLineThree}</div>
    </div>`;
    houses.push(house);
}

// -------------------- LEISURE

for (let l = 1; l <= 3; l++) {

    z = zones[l - 1];

    zone = `${road}<div class="area area__leisure">
    ${tree} ${treeSecond} ${treeThird}
    <div class="zone ${z}"></div>
    </div>`;

    if (z == zones[1]) {
        zone = `${road}<div class="area area__leisure">
        ${tree} ${treeSecond} ${treeThird}
        ${swimmer}<div class="zone ${z}"></div>
        </div>`;
    }
    
    leisure.push(zone);
}

// -------------------- RESULT

document.write(`

${divClassContainer}

${divClassWrapper}
${park}
${garages.join(``)}
${road}
${park}
${divClosed}

${roadHorizontal}

${divClassWrapper}
${park}
${houses.join(``)}
${road}
${park}
${divClosed}

${roadHorizontal}

${divClassWrapper}
${park}
${leisure.join(``)}
${road}
${park}
${divClosed}

${divClosed}
`);
