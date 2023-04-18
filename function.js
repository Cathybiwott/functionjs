// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.


// Create arrays for inventory items and stock quantities
let inventoryItems = ["apples", "bananas", "oranges", "grapes", "mangoes"];
let stockQuantities = [20, 15, 12, 8, 5];

// Function to add a new item to the inventory, updating both arrays
function addItem(itemName, quantity) {
  // let empty = []
  if (inventoryItems.length >= 10 || stockQuantities.length >= 10) {
    return "Maximum capacity reached";
  } else {
    inventoryItems.push(itemName);
    stockQuantities.push(quantity);
    // return [inventoryItems, StockQuantities];
  }
}
addItem("pineapples",10);
console.log(inventoryItems)
console.log(stockQuantities)




// Function to update the stock quantity of an existing item
function updateStock(itemName, newQuantity) {
// updated = [];
  let index = inventoryItems.indexOf(itemName);
  if (index !== -1) {
    stockQuantities[index] = newQuantity;
    return (`quantity of ${itemName} updated to ${newQuantity}`);
  } else {
    return "Item not found";
  }
}
updateStock("oranges", 20);
// console.log(inventoryItems)
console.log(stockQuantities)
// let updated = updateStock(("oranges",20))
// console.log(updated());




// Function to calculate the total number of items in the inventory
function totalItems() {
  let total = 0;
  for (let i = 0; i<stockQuantities.length; i++) {
    total += stockQuantities[i];
  }
  return total;
}
console.log(totalItems());

// Function to find the item with the lowest stock quantity
function findLowestStock() {
  let lowestStock = stockQuantities[0];
  let lowestIndex = 0;
  for (let i = 1; i < stockQuantities.length; i++) {
    if (stockQuantities[i] < lowestStock) {
      lowestStock = stockQuantities[i];
      lowestIndex = i;
    }
  }
  return inventoryItems[lowestIndex];
}
console.log(findLowestStock());



