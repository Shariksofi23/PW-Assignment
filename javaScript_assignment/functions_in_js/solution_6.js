function curry(fn) {
    // Get the number of arguments the original function expects
    const expectedArgsCount = fn.length;

    // Inner function to handle the currying process
    function curried(...args) {
        // If the number of arguments provided is less than expected
        if (args.length < expectedArgsCount) {
            // Return a new function that collects more arguments
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        } else {
            // If all arguments are provided, call the original function
            return fn(...args);
        }
    }

    return curried;
}

// Test the curry function with a simple add function
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Testing the curried function
console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(5)(10)); // Output: 15
console.log(curriedAdd(1, 2)); // Output: 3