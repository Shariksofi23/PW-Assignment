function outerFunction(param) {
    // Declare a variable within outerFunction
    const innerVariable = "I'm an inner variable!";

    // Define the inner function
    function innerFunction() {
        // Access the parameter of outerFunction and the inner variable
        console.log(`Parameter: ${param}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }

    // Return the inner function
    return innerFunction;
}

// Demonstrate the functionality
const myInnerFunction = outerFunction("Hello, World!");
myInnerFunction(); // Call the inner function