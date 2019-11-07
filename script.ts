//declare an interface called mountain
//contains the following properties:name - string, height - number
interface Mountain {
  //how you start the function of interface typescript
  name: string; //type of function
  height: number; //type of function
} //this is an outline of the name and height of an object(s)

//Declare an array called mountains which is an array of type Mountain. list name and height
let mountians: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

//Declare a function called findNameOfTallestMountain
// It takes one parameter, an array of Mountain objects.
////Call findNameOfTallestMountain,
function findNameOfTallestMountain(mountians: Mountain[]): string {
  let currentTallestHeight = 0;
  let tallestMountainName: string = ""; //empty string, which is going to loop thorough the array
  mountians.forEach(mountain => {
    //passing it your mountains array as an argument
    if (mountain.height > currentTallestHeight) { //reinitialized
      currentTallestHeight = mountain.height; //each of the mountains are compared to one another by name and height
      tallestMountainName = mountain.name;
    }
  }); //Store the result of the function call (the return value) in a variable
  return tallestMountainName;
  //It returns a string, the name of the tallest mountain in the given array
}
let nameOfTallestMountain = findNameOfTallestMountain(mountians);
console.log(nameOfTallestMountain);
//console.log the variable. (Hint: It will print “Everest”.)

interface Product {
  name: string;
  price: number;
}
let products: Product[] = [
  { name: "lipstick", price: 7 },
  { name: "highlighter", price: 5 },
  { name: "eyeshadow", price: 12 }
];
function calcAverageProductPrice(products: Product[]): number {
  let total: number = 0;
  for (const product of products) { //the same as products.forEach(product =>)
    total += product.price; // += adds the product.price and adds to the variable
    //total = total + product.price syntax
  }
  return total / products.length; //this is how you divide '/' forward slash
}
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);

interface inventoryItem {
  product: Product;
  quantity: number;
}
let inventory: inventoryItem[] = [ 
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
function calcInventoryValue(inventoryItems : inventoryItem[]): number { //arrow function 
    let value:number = 0; // value starts at 0
    inventoryItems.forEach(item => { //loop through the array .forEach statement
        value += item.product.price * item.quantity; //value to store the item price and quantity 
        //dot.notation 
    });
    return value;//return value of all 3 combined 
}
let valuePrice = calcInventoryValue(inventory);
console.log(valuePrice);