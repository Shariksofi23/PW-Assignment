// a) Create a student object
const student = {
    name: 'John Doe',
    age: 20
};

// Prevent any further additions of properties to the student object
Object.preventExtensions(student);

// b) Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'.
const teacher = {
    subject: 'Math'
};

// d) Seal the teacher object, preventing any additions or deletions of properties
Object.seal(teacher);

// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log('Is student object extensible?', extensibleStatus);
console.log('Is teacher object sealed?', sealedStatus);