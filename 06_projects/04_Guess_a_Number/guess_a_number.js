const randomNumber = parseInt((Math.random() * 100) + 1)
console.log(randomNumber)

const guessNum = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const startNewGame = document.querySelector('#newGame')

const guesses = document.querySelector('.guesses')
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

// for popUp
const wrapper = document.querySelector("#wrapper")
const errorOkBtn = document.getElementById("errorOkBtn")
const winnerOkBtn = document.getElementById("winnerOkBtn")
const gameOverOkBtn = document.getElementById("gameOverOkBtn")

// for error
const errorPopUp = document.querySelector("#error")
const winnerPopUp = document.querySelector("#winner")
const gameOverPopUp = document.querySelector("#gameOver")

let guessRemain = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        const guess = parseInt(guessNum.value)
        // validationCheck(guess)
        if (isNaN(guess)) {
            guessNum.value = ""
            wrapper.style.filter = 'blur(10px)'
            errorPopUp.hidden = false
            errorOkBtn.addEventListener('click', function () {
                errorPopUp.hidden = true
                wrapper.style.filter = 'blur(0px)'
            })

        } else if (guess < 1) {
            guessNum.value = ""
            wrapper.style.filter = 'blur(10px)'
            errorPopUp.hidden = false
            errorOkBtn.addEventListener('click', function () {
                errorPopUp.hidden = true
                wrapper.style.filter = 'blur(0px)'
            })
        }
        else if (guess > 100) {
            guessNum.value = ""
            wrapper.style.filter = 'blur(10px)'
            errorPopUp.hidden = false
            errorOkBtn.addEventListener('click', function () {
                errorPopUp.hidden = true
                wrapper.style.filter = 'blur(0px)'
            })
        }
        else {
            // progressChecking(guess)
            if (guessRemain === 10) {
                if (guess === randomNumber) {
                    lowOrHi.innerHTML = (`Winner`)

                    // for winner popup
                    guessNum.value = ""
                    wrapper.style.filter = 'blur(10px)'
                    winnerPopUp.hidden = false
                    const stat = document.createElement('p')
                    stat.style.marginTop = "10px"
                    stat.innerHTML = `Random Number: ${randomNumber}`
                    winnerPopUp.appendChild(stat)
                    winnerOkBtn.addEventListener('click', function () {
                        winnerPopUp.hidden = true
                        wrapper.style.filter = 'blur(0px)'
                        winnerPopUp.removeChild(stat)
                    })

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

                    // for gameover popup
                    guessNum.value = ""
                    wrapper.style.filter = 'blur(10px)'
                    gameOverPopUp.hidden = false
                    const gameOverStat = document.createElement('p')
                    gameOverStat.style.marginTop = "10px"
                    gameOverStat.innerHTML = `Random Number: ${randomNumber}`
                    gameOverPopUp.appendChild(gameOverStat)

                    // gameOverOkBtn.addEventListener('click', function () {
                    //     gameOverPopUp.hidden = true
                    //     wrapper.style.filter = 'blur(0px)'
                    // })

                    setTimeout(() => {
                        gameOverPopUp.hidden = true
                        wrapper.style.filter = 'blur(0px)'
                        gameOverPopUp.removeChild(gameOverStat)
                    }, 2000);

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

                    // for winnerPopUp
                    guessNum.value = ""
                    wrapper.style.filter = 'blur(10px)'
                    winnerPopUp.hidden = false
                    const stat = document.createElement('p')
                    stat.style.marginTop = "10px"
                    stat.innerHTML = `Random Number: ${randomNumber}`
                    winnerPopUp.appendChild(stat)
                    winnerOkBtn.addEventListener('click', function () {
                        winnerPopUp.hidden = true
                        wrapper.style.filter = 'blur(0px)'
                        winnerPopUp.removeChild(stat)
                    })

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
