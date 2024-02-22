const today = document.querySelector('.today')
console.log(today)
const now = document.querySelector('.now')
console.log(now)

const btn = document.querySelector('.btn')
console.log(btn)



btn.addEventListener('click', function () {

    // one way 

    // setInterval(function () {
    //     const date = new Date()
    //     today.innerHTML = date.toDateString()
    //     now.innerHTML = date.toLocaleTimeString()
    // }, 1000)


    // another way 
    setInterval(Clock, 1000)

    function Clock() {
        const date = new Date()
        today.innerHTML = date.toDateString()
        now.innerHTML = date.toLocaleTimeString()
    }

})