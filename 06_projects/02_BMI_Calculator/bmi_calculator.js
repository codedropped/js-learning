

const form = document.querySelector('form')


form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const report = document.querySelector('#report')


    if (height == '' || height < 0 || isNaN(height)) {
        result.style.display = "block"
        result.style.color = "red"
        result.innerHTML = `Please enter a valid height`
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.style.display = "block"
        result.style.color = "red"
        result.innerHTML = `Please enter a valid weight`
    }
    else {

        const finalResult = (weight / ((height * height) / 10000)).toFixed(2);

        result.style.display = "block"
        result.innerHTML = finalResult;

        if (finalResult < 18.6) {
            report.style.display = "block"
            report.innerHTML = 'Under Weight'
            result.style.color = "red"
            report.style.color = "red"
        }
        else if (finalResult >= 18.6 && finalResult <= 24.9) {
            report.style.display = "block"
            report.innerHTML = 'Normal Weight'
            report.style.color = "green"
        }
        else {
            report.style.display = "block"
            report.innerHTML = 'Over Weight'
            result.style.color = "red"
            report.style.color = "red"
        }
    }

})