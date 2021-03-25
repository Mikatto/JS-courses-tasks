var users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];

// 1. Create a new array using forEach that has all usernames with a "!" to each of the usernames.Example: ["john!", "becky!", ...].

let namesAlert = [];

users.forEach(addAlertMark);

function addAlertMark(element, index) {
    if (index =[0]) {
        namesAlert.push(element[0] + `!`)
    }
}
console.log(namesAlert);

// 2. Create another new array using map that has all usernames with a "?" to each of the usernames.Example: ["john?", "becky?", ...].

let namesQuestion = users.map(addQuestionMark);

function addQuestionMark(element, index) {
    if (index = [0]) {
        return element[0] + `?`;
    }
}
console.log(namesQuestion);

// 3. Filter the original array of users to only include users who are on team: red.

let redTeam = users.filter(red);

function red(element) {
    return element[1] == "red";
}

console.log(redTeam);

// 4. In filtered array find out the total score of all filtered users | and print all user's data into table with <tfoot>Final summ</tfoot> tag.

let finalSumm = 0;

redTeam.forEach(summ);

function summ(element) {
    if (element[2]) {
        finalSumm += element[2];
    }
}
console.log(finalSumm);

document.write(`
<table>
    <tr>
        <td>${redTeam[0][0]}</td>
        <td>${redTeam[0][1]}</td>
        <td>${redTeam[0][3].join(', ')}</td>
        <td>${redTeam[0][2]}</td>
    </tr>
    <tr>
        <td>${redTeam[1][0]}</td>
        <td>${redTeam[1][1]}</td>
        <td>${redTeam[1][3].join(', ')}</td>
        <td>${redTeam[1][2]}</td>
    </tr>
<tfoot>
    <td colspan="3">Final summ</td>
    <td>${finalSumm}</td>
</tfoot>
</table>

`)