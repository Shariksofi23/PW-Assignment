// Function to test regex pattern against a string
function testRegex(pattern, str) {
    // Create a RegExp object from the pattern
    const regex = new RegExp(pattern);
    
    // Test the string against the regex pattern
    return regex.test(str);
}

// Test cases
const tests = [
    { pattern: '^Hello', str: 'Hello, World!', expected: true }, // Starts with 'Hello'
    { pattern: 'World$', str: 'Hello, World!', expected: true }, // Ends with 'World'
    { pattern: '\\d+', str: 'There are 123 apples', expected: true }, // Contains digits
    { pattern: '^[a-z]+$', str: 'hello', expected: true }, // All lowercase letters
    { pattern: '^[A-Z]+$', str: 'HELLO', expected: true }, // All uppercase letters
    { pattern: '^[A-Za-z]+$', str: 'Hello123', expected: false }, // Not all letters
    { pattern: 'cat', str: 'The cat is on the roof', expected: true }, // Contains 'cat'
    { pattern: 'dog', str: 'The cat is on the roof', expected: false } // Does not contain 'dog'
];

// Running the tests
tests.forEach(({ pattern, str, expected }) => {
    const result = testRegex(pattern, str);
    console.log(`Pattern: ${pattern}, String: "${str}", Match: ${result}, Expected: ${expected}`);
});