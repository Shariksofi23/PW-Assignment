function generateGreeting(name) {
    return `Hello, ${name}! Welcome!`;
}

// Using the function to greet three different people
const greeting1 = generateGreeting("Alice");
const greeting2 = generateGreeting("Bob");
const greeting3 = generateGreeting("Charlie");

// Logging the greetings to the console
console.log(greeting1); // Output: Hello, Alice! Welcome!
console.log(greeting2); // Output: Hello, Bob! Welcome!
console.log(greeting3); // Output: Hello, Charlie! Welcome!