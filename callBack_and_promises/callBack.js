

// | 1. Register
// | 2. Send-welcome-email
// | 3. Login
// | 4. Get-user-data
// | 5. display-user-data 

// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime()
//     while (new Date() < ms) { }
// }

function register(callback) {

    setTimeout(() => {
        console.log('Register End')
        callback()
    }, 1000)
}

function sendEmail(callback) {

    setTimeout(() => {
        console.log('Email End')
        callback()
    }, 5000)
}

function login(callback) {

    setTimeout(() => {
        console.log('Login End')
        callback()
    }, 3000)
}

function getUserData(callback) {

    setTimeout(() => {
        console.log('Got user data')
        callback()
    }, 6000)
}

function displayUserData(callback) {

    setTimeout(() => {
        console.log('User data displayed')
        callback()
    }, 1000)
}

// callback hell
register(function () {
    sendEmail(function () {
        login(function () {
            getUserData(function () {
                displayUserData(function () {
                });
            });
        });
    });
});


console.log('Other application work!');