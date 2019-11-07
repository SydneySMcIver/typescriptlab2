//Declare an array called mountains which is an array of type Mountain. list name and height
var mountians = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
//Declare a function called findNameOfTallestMountain
// It takes one parameter, an array of Mountain objects.
////Call findNameOfTallestMountain,
function findNameOfTallestMountain(mountians) {
    var currentTallestHeight = 0;
    var tallestMountainName = ""; //empty string, which is going to loop thorough the array
    mountians.forEach(function (mountain) {
        //passing it your mountains array as an argument
        if (mountain.height > currentTallestHeight) { //reinitialized
            currentTallestHeight = mountain.height; //each of the mountains are compared to one another by name and height
            tallestMountainName = mountain.name;
        }
    }); //Store the result of the function call (the return value) in a variable
    return tallestMountainName;
    //It returns a string, the name of the tallest mountain in the given array
}
var nameOfTallestMountain = findNameOfTallestMountain(mountians);
console.log(nameOfTallestMountain);
var products = [
    { name: "lipstick", price: 7 },
    { name: "highlighter", price: 5 },
    { name: "eyeshadow", price: 12 }
];
function calcAverageProductPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) { //the same as products.forEach(product =>)
        var product = products_1[_i];
        total += product.price; // += adds the product.price and adds to the variable
        //total = total + product.price syntax
    }
    return total / products.length; //this is how you divide '/' forward slash
}
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
function calcInventoryValue(inventoryItems) {
    var value = 0; // value starts at 0
    inventoryItems.forEach(function (item) {
        value += item.product.price * item.quantity; //value to store the item price and quantity 
        //dot.notation 
    });
    return value; //return value of all 3 combined 
}
var valuePrice = calcInventoryValue(inventory);
console.log(valuePrice);
