

// | 1. Register
// | 2. Send-welcome-email
// | 3. Login
// | 4. Get-user-data
// | 5. display-user-data 

// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime()
//     while (new Date() < ms) { }
// }

function register() {

    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Register End')
            resolve('Success')
        }, 1000)
    });
    return promise;


}

function sendEmail() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email End')
            resolve()
        }, 2000)
    })
    return promise

}

function login() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Login End')
            resolve()
        }, 2000)
    })
    return promise


}

function getUserData() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Got user data')
            resolve('get user data rejected')
        }, 2000)
    })
    return promise


}

function displayUserData() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User data displayed')
            resolve()
        }, 1000)
    })
    return promise


}

// // callback hell
// register(function () {
//     sendEmail(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUserData(function () {
//                 });
//             });
//         });
//     });
// });

// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch(function (err) {
//         console.log(err);
//     })


// Async await
// async function authenticate() {
//     await register();
//     await sendEmail();
//     await login();
//     await getUserData();
//     await displayUserData();
// }

// authenticate().then(() => {
//     console.log('All set!')
// }).catch((err) => {
//     console.log(err);
// })


//using try catch 

async function authenticate() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch (err) {
        console.log(err)
        throw new Error()
    }
}

authenticate().then(() => {
    console.log('All set!')
}).catch((err) => {
    console.log(err)
})

console.log('Other application work!');