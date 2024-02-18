// IIFE = Immidiately Invokeable Function Expressions

(function one() {
    console.log("NAMED FUNCTION")
    console.log("DB CONNECTED")
})();


(() => {
    console.log("UNNAMED FUNCTION OR ANONYMOUS FUNCTION")
    console.log("DB CONNECTED")
})();

((name) => {
    console.log("UNNAMED FUNCTION OR ANONYMOUS FUNCTION WITH PARAMETER AND ARGUMENTS")
    console.log(`${name}, DB CONNECTED`)
})("Akon's");