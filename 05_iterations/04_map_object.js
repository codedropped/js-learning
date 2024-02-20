const country = new Map()

country.set('USA', "United States of America")
country.set('NY', "Newyork")
country.set('IN', "India")
country.set('PK', "Pakistan")
country.set('PK', "Pakistan")

console.log(country)


// using for of loop

for (const [nation, value] of country) {
    console.log(nation, value);
}