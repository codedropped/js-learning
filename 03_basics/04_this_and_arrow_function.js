
const print = (display) => (console.log(display)) // implicit return

const user = {
    username: "Akon",
    price: 9999999999999,

    welcomeMessage: function () {
        const username = "SHB"
        console.log(`${this.username}, welcome to JS`)
        print(this)

    },
}

print(this)//empty object

user.welcomeMessage()
user.username = "Bip"
user.welcomeMessage()

print(user)
