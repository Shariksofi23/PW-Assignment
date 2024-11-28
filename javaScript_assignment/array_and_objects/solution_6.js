function displayStudentInfo(student) {
    for (let property in student) {
        if (student.hasOwnProperty(property)) {
            console.log(`Property: ${property}, Value: ${student[property]}`);
        }
    }
}

// Example usage:
const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

displayStudentInfo(student);