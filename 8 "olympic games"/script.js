const sports = [
    ['1F93A', 'fencing'],
    ['26F8', 'figure skating'],
    ['26F7', 'skier'],
    ['1F3C2', 'snowboarder'],
    ['1F3CC', 'golfing'],
    ['1F6A3', 'rowing boat'],
    ['1F3CA', 'swimming'],
    ['1F938', 'gymnastics'],
    ['1F93E', 'handball']
];

const winners = [
    ['fencing', 'gold', 'fr'],
    ['fencing', 'silver', 'it'],
    ['fencing', 'bronze', 'us'],

    ['figure skating', 'gold', 'ca'],
    ['figure skating', 'silver', 'ru'],
    ['figure skating', 'bronze', 'us'],

    ['skier', 'gold', 'no'],
    ['skier', 'silver', 'ru'],
    ['skier', 'bronze', 'fr'],

    ['snowboarder', 'gold', 'us'],
    ['snowboarder', 'silver', 'jp'],
    ['snowboarder', 'bronze', 'au'],

    ['golfing', 'gold', 'gb'],
    ['golfing', 'silver', 'se'],
    ['golfing', 'bronze', 'us'],

    ['rowing boat', 'gold', 'us'],
    ['rowing boat', 'silver', 'gb'],
    ['rowing boat', 'bronze', 'ro'],

    ['swimming', 'gold', 'us'],
    ['swimming', 'silver', 'gb'],
    ['swimming', 'bronze', 'au'],

    ['gymnastics', 'gold', 'ru'],
    ['gymnastics', 'silver', 'ru'],
    ['gymnastics', 'bronze', 'ua'],

    ['handball', 'gold', 'dk'],
    ['handball', 'silver', 'fr'],
    ['handball', 'bronze', 'de'],
];

const olympic = ['1F535', '26AB', '1F534', '1F7E1', '1F7E2'];

const medals = [
    ['1F947', 'gold'],
    ['1F948', 'silver'],
    ['1F949', 'bronze'],
];

const continents = [
    ['fr', 'Europe'],
    ['it', 'Europe'],
    ['us', 'The Americas'],
    ['ca', 'The Americas'],
    ['ru', 'Europe'],
    ['no', 'Europe'],
    ['jp', 'Asia'],
    ['au', 'Oceania'],
    ['gb', 'Europe'],
    ['se', 'Europe'],
    ['ro', 'Europe'],
    ['ua', 'Europe'],
    ['dk', 'Europe'],
    ['de', 'Europe']
];

// String.fromCodePoint(parseInt('1F93A', 16)); console.log(a);
// 'ca'.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));

// Необходимо вывести таблицу победителей Олимпийских игр в соответствии с видом спорта и континентом команды.
// Пример таблицы в прикрепленном рисунке.

// Метод для преобразования unicode вида спорта в соответствующую иконку – String.fromCodePoint(parseInt(val, 16));
// где val – unicode вида спорта.

// Метод для преобразования аббревиатуры страны в соответствующую иконку флага – 
// ca'.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397)); где 'ca' – аббревиатура страны(Canada).

const tr = `<tr>`;
const trClosed = `</tr>`;
const td = `<td>`;
const tdClosed = `</td>`;
const th = `<th>`;
const thClosed = `</th>`;

// ----------------------------------------------------------

let mainTable = sports.map(sport);

function getContinent(country) {
    let countryData = continents.filter(function (data) {
        return data[0] === country;
    })
    return countryData[0][1];
}

function sport(sportString) {
    let sportType = sportString[1];

    // Победители
    let sportWinners = winners.filter(winner);
    function winner(winner) {
        return winner[0] === sportType;
    }

    // Победителей по континентам
    let Europe = [];
    let America = [];
    let Asia = [];
    let Oceania = [];
    
    sportWinners.forEach(function (winner) {
        
        let userContinent = getContinent(winner[2]);
        let flag = winner[2].toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
        
        let symbolMedal = medals.map(function (colorMedal) {
            if (winner[1]==='gold') {
                return String.fromCodePoint(parseInt(medals[0][0], 16));
            } else if (winner[1] === 'silver') {
                return String.fromCodePoint(parseInt(medals[1][0], 16));
            } else if (winner[1] === 'bronze') {
                return String.fromCodePoint(parseInt(medals[2][0], 16));
            }

        });
        
        switch (userContinent) {
            case 'Europe':
                Europe.push(`<p style="background-color: ${winner[1]};">${symbolMedal[0]} — ${flag}</p>`);
                break;
            case 'The Americas':
                America.push(`<p style="background-color: ${winner[1]};">${symbolMedal[0]} — ${flag}</p>`);
                break;
            case 'Asia':
                Asia.push(`<p style="background-color: ${winner[1]};">${symbolMedal[0]} — ${flag}</p>`);
                break;
            case 'Oceania':
                Oceania.push(`<p style="background-color: ${winner[1]};">${symbolMedal[0]} — ${flag}</p>`);
                break;
        }

    })
    


    // Вывод
    let sportRows = `<tr>
        <td>${String.fromCodePoint(parseInt(sportString[0], 16))}</td>
        <td>${Europe.join('')}</td>
        <td></td>
        <td>${America.join('')}</td>
        <td>${Asia.join('')}</td>
        <td>${Oceania.join('')}</td>
    </tr>`;

    return sportRows;
} 

// Кружки
let ovals = olympic.map(oval);
function oval(ctn) {
    ctn = th + String.fromCodePoint(parseInt(ctn, 16)) + thClosed;
    return ctn;
}

let thead = `
<thead>
    <tr>
        <th style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size:12px;font-weight:400;">Виды спорта/Континенты</th>
        ${ovals[0]}
        ${ovals[1]}
        ${ovals[2]}
        ${ovals[3]}
        ${ovals[4]}
    </tr>
</thead>`;

// Вёрстка
document.write(`<table>
    ${thead}
    ${mainTable.join('')}
</table>`);
