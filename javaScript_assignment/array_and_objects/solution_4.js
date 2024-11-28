const students = [
    { id: 1, name: "Alice", age: 20, grade: "A" },
    { id: 2, name: "Bob", age: 22, grade: "B" },
    { id: 3, name: "Charlie", age: 19, grade: "A" }
];

// Function to add a new student
function addStudent(name, age, grade) {
    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    const newStudent = { id: newId, name: name, age: age, grade: grade };
    students.push(newStudent);
    console.log(`Added: ${newStudent.name}`);
}

// Function to update a student's information
function updateStudent(id, newName, newAge, newGrade) {
    const student = students.find(s => s.id === id);
    if (student) {
        student.name = newName;
        student.age = newAge;
        student.grade = newGrade;
        console.log(`Updated: ${student.name}`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// Function to delete a student
function deleteStudent(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        console.log(`Deleted: ${deletedStudent[0].name}`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// Function to list all students
function listAllStudents() {
    console.log("Student List:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// Function to find students by grade
function findStudentsByGrade(grade) {
    const filteredStudents = students.filter(s => s.grade === grade);
    if (filteredStudents.length > 0) {
        console.log(`Students with grade ${grade}:`);
        filteredStudents.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`);
        });
    } else {
        console.log(`No students found with grade ${grade}.`);
    }
}

// Function to calculate the average age of all students
function calculateAverageAge() {
    if (students.length === 0) {
        console.log("No students available to calculate average age.");
        return;
    }
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average Age: ${averageAge.toFixed(2)}`);
}

// Example usage
listAllStudents(); // List all students
addStudent("David", 21, "B"); // Add a new student
updateStudent(2, "Bob Smith", 23, "A"); // Update an existing student
deleteStudent(1); // Delete a student
listAllStudents(); // List updated student list
findStudentsByGrade("A"); // Find students with grade A
calculateAverageAge(); // Calculate average age