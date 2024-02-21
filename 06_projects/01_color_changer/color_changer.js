
const containerColor = document.querySelector('.container')
console.log(containerColor)
const buttons = document.querySelectorAll('.button')

const txtColor = document.querySelectorAll('.textColor')

console.log(buttons);


buttons.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        const color = e.target.id

        /*  if (e.target.id === 'gray') {
              containerColor.style.backgroundColor = e.target.id
              console.log(e.target.id)
          };
            if (e.target.id === 'green') {
                containerColor.style.backgroundColor = e.target.id
                console.log(e.target.id)
            };
            if (e.target.id === 'khaki') {
                containerColor.style.backgroundColor = e.target.id
                console.log(e.target.id)
            };
            if (e.target.id === 'blue') {
                containerColor.style.backgroundColor = e.target.id
                console.log(e.target.id)
            };
            if (e.target.id === 'yellow') {
                containerColor.style.backgroundColor = e.target.id
                console.log(e.target.id)
            } */

        switch (color) {
            case "gray":
                containerColor.style.backgroundColor = color;
                break;
            case "green":
                containerColor.style.backgroundColor = color;
                break;
            case "khaki":
                containerColor.style.backgroundColor = color
                break;
            case "blue":
                containerColor.style.backgroundColor = color
                break;
            case "yellow":
                containerColor.style.backgroundColor = color
                break;

            default:
                break;
        }
    })
})