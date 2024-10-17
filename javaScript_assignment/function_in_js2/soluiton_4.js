// Function to check for a match and extract parts using capturing groups
function extractDateComponents(pattern, str) {
    // Create a RegExp object from the pattern
    const regex = new RegExp(pattern);
    
    // Execute the regex on the string
    const match = regex.exec(str);
    
    // Return the match or null if no match found
    return match ? match.slice(1) : null; // slice(1) to exclude the full match
}

// Test cases
const testStrings = [
    { pattern: '(\\d{2})/(\\d{2})/(\\d{4})', str: 'Today is 25/12/2023.', description: 'Date in DD/MM/YYYY format' }, // Matches DD/MM/YYYY
    { pattern: '(\\d{1,2})-(\\d{1,2})-(\\d{4})', str: 'The event is on 7-11-2023.', description: 'Date in D-M-YYYY format' }, // Matches D-M-YYYY
    { pattern: '(\\d{2})\\s+(\\w+)\\s+(\\d{4})', str: 'I was born on 15 March 1990.', description: 'Date in DD Month YYYY format' }, // Matches DD Month YYYY
];

// Running the tests
testStrings.forEach(({ pattern, str, description }) => {
    const components = extractDateComponents(pattern, str);
    console.log(`Description: ${description}, Pattern: ${pattern}, String: "${str}", Extracted Components: ${components}`);
});