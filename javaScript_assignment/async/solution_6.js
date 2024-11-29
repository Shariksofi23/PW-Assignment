const storageInfo = `
### localStorage and sessionStorage APIs

Both \`localStorage\` and \`sessionStorage\` are part of the Web Storage API, which allows web applications to store data locally within the user's browser. They provide a simple and efficient way to store key-value pairs.

### localStorage

**Purpose:**
- \`localStorage\` is used to store data with no expiration time. This means the data will persist even after the browser is closed and reopened, until it is explicitly deleted.

**Usage:**
- It's ideal for storing data that needs to be available across browser sessions, such as user preferences, settings, or themes.

**Example:**
\`\`\`javascript
// Storing data
localStorage.setItem('username', 'JohnDoe');

// Retrieving data
let username = localStorage.getItem('username');
console.log(username);  // Output: JohnDoe

// Removing data
localStorage.removeItem('username');

// Clearing all data
localStorage.clear();
\`\`\`

### sessionStorage

**Purpose:**
- \`sessionStorage\` is used to store data for the duration of the page session. This means the data is only available while the browser tab is open and will be cleared when the tab is closed.

**Usage:**
- It's useful for storing temporary data that should be cleared after the session ends, such as form inputs, temporary calculations, or single-use tokens.

**Example:**
\`\`\`javascript
// Storing data
sessionStorage.setItem('sessionID', '12345');

// Retrieving data
let sessionID = sessionStorage.getItem('sessionID');
console.log(sessionID);  // Output: 12345

// Removing data
sessionStorage.removeItem('sessionID');

// Clearing all data
sessionStorage.clear();
\`\`\`

### Summary

- **localStorage**: Persistent storage across browser sessions. Use it for data that needs to persist even after the browser is closed.
- **sessionStorage**: Temporary storage for the duration of the page session. Use it for data that should be cleared when the browser tab is closed.

Both APIs provide a convenient way to store data on the client-side, enhancing the user experience by making web applications faster and more responsive.
`;

console.log(storageInfo);