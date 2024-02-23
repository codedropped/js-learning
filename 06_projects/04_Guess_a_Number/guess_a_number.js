const randomNumber = parseInt((Math.random() * 100) + 1)
console.log(randomNumber)

const guessNum = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const startNewGame = document.querySelector('#newGame')
startNewGame.hidden = true


const guesses = document.querySelector('.guesses')
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")


let guessRemain = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()


        const guess = parseInt(guessNum.value)
        // validationCheck(guess)
        if (isNaN(guess)) {
            alert(`Please enter a valid number`)
        } else if (guess < 1) {
            alert(`Please enter the value from 1 to 100`)
        }
        else if (guess > 100) {
            alert(`Please enter the value from 1 to 100`)
        }
        else {
            // progressChecking(guess)

            if (guessRemain === 10) {

                if (guess === randomNumber) {

                    lowOrHi.innerHTML = (`Winner`)

                    // displayValue(guess)
                    guessNum.value = ""
                    guessRemain++
                    guesses.innerHTML += `${guess}`
                    remaining.innerHTML = `${11 - guessRemain}`

                    // endGame()

                    guessNum.setAttribute('disabled', "")
                    submit.hidden = true
                    startNewGame.hidden = false

                    const p = document.createElement('p')
                    p.style.marginTop = "20px"
                    p.innerHTML = `Random Number: ${randomNumber}`
                    document.querySelector(".resultParas").appendChild(p)

                    // p.classList.add('button')
                    // p.innerHTML = 'Start new game'
                    // document.querySelector('.calculate').appendChild(p)
                    // startNewGame()
                    startNewGame.addEventListener('click', function (e) {
                        randomNumber = parseInt((Math.random() * 100) + 1)
                        guessRemain = 1
                        remaining.innerHTML = `${11 - numGuess} `
                        userInput.removeAttribute('disabled');
                        submit.hidden = false

                        playGame = true

                        const p = document.createElement('p')
                        p.style.marginTop = "20px"
                        p.innerHTML = `Random Number: ${randomNumber}`
                        document.querySelector(".resultParas").removeChild(p)
                    })

                }

                else {

                    lowOrHi.innerHTML = (`Game over`)

                    // displayValue(guess)
                    guessNum.value = ""
                    guessRemain++
                    guesses.innerHTML += `${guess}`
                    remaining.innerHTML = `${11 - guessRemain}`

                    // endGame()

                    guessNum.setAttribute('disabled', "")
                    submit.hidden = true
                    startNewGame.hidden = false

                    const p = document.createElement('p')
                    p.style.marginTop = "20px"
                    p.innerHTML = `Random Number: ${randomNumber}`
                    document.querySelector(".resultParas").appendChild(p)
                    // p.classList.add('button')
                    // p.innerHTML = 'Start new game'
                    // document.querySelector('.calculate').appendChild(p)
                    // startNewGame()
                    startNewGame.addEventListener('click', function (e) {
                        randomNumber = parseInt((Math.random() * 100) + 1)
                        guessRemain = 1
                        remaining.innerHTML = `${11 - numGuess} `
                        userInput.removeAttribute('disabled');
                        submit.hidden = false

                        playGame = true

                        const p = document.createElement('p')
                        p.style.marginTop = "20px"
                        p.innerHTML = `Random Number: ${randomNumber}`
                        document.querySelector(".resultParas").removeChild(p)
                    })

                }




            }
            else {
                guessNum.value = ""
                guessRemain++
                guesses.innerHTML += `${guess}, `
                remaining.innerHTML = `${11 - guessRemain}`

                if (guess < randomNumber) {
                    lowOrHi.innerHTML = (`Go Higher`)
                }
                else if (guess > randomNumber) {
                    lowOrHi.innerHTML = (`Go Lower`)
                }
                else if (guess === randomNumber) {
                    lowOrHi.innerHTML = (`Winner`)

                    // endGame()
                    guessNum.setAttribute('disabled', "")
                    submit.hidden = true
                    startNewGame.hidden = false

                    const p = document.createElement('p')
                    p.style.marginTop = "20px"
                    p.innerHTML = `Random Number: ${randomNumber}`
                    document.querySelector(".resultParas").appendChild(p)

                    // startNewGame()
                    startNewGame.addEventListener('click', function (e) {
                        randomNumber = parseInt((Math.random() * 100) + 1)
                        guessRemain = 1
                        remaining.innerHTML = `${11 - numGuess} `
                        userInput.removeAttribute('disabled');
                        submit.hidden = false

                        playGame = true

                        const p = document.createElement('p')
                        p.style.marginTop = "20px"
                        p.innerHTML = `Random Number: ${randomNumber}`
                        document.querySelector(".resultParas").removeChild(p)
                    })
                }
            }
        }
    })
}

function validationCheck(guess) {



}

function progressChecking(guess) {

}

function displayValue(guess) {

}

function displayMessage(guess) {
    //  = `${guess}`
}