// Function to find matches for specific character classes in a string
function findCharacterClassMatches(pattern, str) {
    // Create a RegExp object with the global flag to find all matches
    const regex = new RegExp(pattern, 'g');
    
    // Use the match method to find all matches in the string
    const matches = str.match(regex);
    
    // Return matches or an empty array if no matches found
    return matches ? matches : [];
}

// Test cases
const testStrings = [
    { pattern: '\\d', str: 'There are 123 apples and 45 oranges.', description: 'Digits' }, // Matches digits
    { pattern: '[A-Z]', str: 'Hello World!', description: 'Uppercase Letters' }, // Matches uppercase letters
    { pattern: '[a-z]', str: 'Hello World!', description: 'Lowercase Letters' }, // Matches lowercase letters
    { pattern: '[!@#$%^&*]', str: 'Hello! Are you #1?', description: 'Special Characters' }, // Matches special characters
];

// Running the tests
testStrings.forEach(({ pattern, str, description }) => {
    const matches = findCharacterClassMatches(pattern, str);
    console.log(`Description: ${description}, Pattern: ${pattern}, String: "${str}", Matches: ${matches}`);
});