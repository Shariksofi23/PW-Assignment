function factorial(n) {
    // Check if the input is a non-negative integer
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// Testing the function with different inputs
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
console.log(factorial(1));  // Output: 1
console.log(factorial(4));  // Output: 24
console.log(factorial(6));  // Output: 720
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers."