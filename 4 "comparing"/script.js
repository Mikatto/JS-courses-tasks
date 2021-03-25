let arrA = [1,7, 62, 98, 56, 'just a words'];
let arrB = [2,9, 'hi', 1, 89, 44,45];

function arraySum(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

function comparing (arrFirst, arrSecond) {

    var summArrayF = arraySum(arrFirst);
    var summArrayS = arraySum(arrSecond);

    if (summArrayF > summArrayS) {
        return `сумма A больше = ${summArrayF}`;

    } else if (summArrayF < summArrayS) {
        return `сумма B больше = ${summArrayS}`;

    } else {
        return `Same array's summ`
    }
}

console.log(comparing(arrA, arrB))