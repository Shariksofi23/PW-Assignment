const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Print the shopping cart before modifications
console.log("Before modifications:", shoppingCart);
// Add 'Meat' at the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
// Remove 'Honey' if allergic
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
}
// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
// Print the shopping cart after modifications
console.log("After modifications:", shoppingCart);