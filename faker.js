// faker exercise to generate random 10 products with price

var faker = require("faker");

for (var i = 0; i < 10; i++) {
    var pr = faker.commerce.price();
    var prod = faker.lorem.word();
    console.log((i + 1) + ". Product Name: " + prod + " Price: " + pr);
}