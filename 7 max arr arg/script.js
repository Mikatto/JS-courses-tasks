
let arrayFirst = [6, `lol`, 12, `kek`, 24,`cheburek`];
let arraySecond = [10, 20, 30, 40, 54, 87, 91, 43, 22];
let arrayThird = [98, 102, 3, 123];

let arrays = [arrayFirst, arraySecond, arrayThird];

function getMaxs(args) {

    let res = [];

    for (i = 0; i < args.length; i++) {
        max = args[0][0];
        
        for (j = 0; j < args[i].length; j++) {
            
            if (args[i][j] > max) {
                max = args[i][j];
            }
        }

        res.push(max);

    }
    return resultFoo = res.join(';');

}
console.log(getMaxs(arrays));