function request(url) {
    let request = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();

        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.statusText);
                }
            }
        })
    });
    return request;
}

// document.write('loading spinner start')

let a = request('data.json');
let b = request('data2.json');

Promise.all([a, b]).then((values) => {
    let c = [];
    values.forEach( fileJ => {
        c=c.concat(fileJ.children);
    });
    console.log(c);
    // document.write('loading spinner end')
});

