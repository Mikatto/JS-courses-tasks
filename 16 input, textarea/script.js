// Есть три тега < input type = "text" >.
// Необходимо написать функцию, которая выведет в < textarea > содержимое всех input полей через запятую.
// Если в`input` через какое - то время произошли изменения – в`textarea` они должны появится тоже.

window.addEventListener('load', function () {

    let inputs = document.querySelectorAll('.input-field')
    let textarea = document.querySelector('.text-area-field')

    let inputsSummary = []

    for (let i = 0; i < inputs.length; i++) {
        inputsSummary.push(inputs[i].value);
        inputs[i].addEventListener('input', function () {
            inputsSummary[i] = this.value;
            getStory();
        })
    }

    function getStory() {
        textarea.value = inputsSummary.join(',')
    }
})