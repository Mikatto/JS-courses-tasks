function afterFirstPromise(e){
    return e*10;
};
function afterSecondPromise(e){
    return e*10;
};
function afterThirdPromise(e){
    return e*10;
};

let afterFunctions = [afterFirstPromise,afterSecondPromise,afterThirdPromise];

function runAfter(valuesArr){
    let arrayAfterFunctions = valuesArr.map(function(value,index){
    return afterFunctions[index](value);
    });

    return console.log(arrayAfterFunctions); 
}

function afterFirstPromise(value){
    return value*10;
};

let getPromise = timer => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(timer);
        },timer);
        })
}

Promise
    .all([
        getPromise(1000),
        getPromise(2000),
        getPromise(3000)
    ])
    .then(
        all => {
            runAfter(all);
    }
)

// для каждого числа во входящем массиве valuesArr применить соответствующую ф-ю с массива afterFunctions;