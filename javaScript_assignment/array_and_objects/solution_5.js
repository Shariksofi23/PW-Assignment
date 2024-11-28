const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

// Using a for...in loop to iterate over the properties of the student object
for (const key in student) {
    if (student.hasOwnProperty(key)) { // Check if the property belongs to the object itself
        // Perform various operations based on the property
        console.log(`${key}: ${student[key]}`); // Print the key and its value

        // Additional operations based on the property type
        switch (key) {
            case 'name':
                console.log(`Student's name is ${student[key]}`);
                break;
            case 'age':
                if (student[key] >= 18) {
                    console.log(`${student[key]} is an adult.`);
                } else {
                    console.log(`${student[key]} is a minor.`);
                }
                break;
            case 'GPA':
                if (student[key] >= 3.5) {
                    console.log(`Excellent GPA: ${student[key]}`);
                } else {
                    console.log(`GPA: ${student[key]}`);
                }
                break;
            case 'isEnrolled':
                console.log(student[key] ? "Student is currently enrolled." : "Student is not enrolled.");
                break;
            // You can add more cases for other properties if needed
            default:
                console.log(`Property ${key} has value: ${student[key]}`);
        }
    }
}