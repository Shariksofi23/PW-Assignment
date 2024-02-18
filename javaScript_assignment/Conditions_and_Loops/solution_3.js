let loop="Loops in programming are used to repeatedly execute a block of code as long as a specified condition is true. They are essential for automating repetitive tasks and iterating over data structures. JavaScript provides several types of loops:"
const for_loop={
    def: " for loop, It repeats a block of code a specified number of times.",
    syntax:"for (initialization; condition; increment/decrement) \n{// code to be executed}",
        example:"for (let i = 0; i < 5; i++)\n {console.log('Iteration:', i);\n}"
}
const while_loop={
    def:"while loop,It repeats a block of code as long as a specified condition is true.",
    syntax:"while (condition) \n{// code to be executed}",
        example:"let i = 0; \n while (i < 5)\n {console.log('Iteration:', i);i++;\n}"
}
 const do_whole_loop={
    def:"do...while loop: It is similar to a while loop, but the block of code is executed once before the condition is tested.",
    syntax:"do { // code to be executed} \n while (condition);",
        example:"let i = 0; \n do \n { console.log('Iteration:', i); \n i++;}\n while (i < 5);"
 }

 const for_in_loop={
    def:"for...in loop: It iterates over the enumerable properties of an object.",
syntax:" for (variable in object) \n { // code to be executed }",
    Example:"const person = { name: 'John', age: 30, city: 'New York' }; \n for (let key in person)\n { console.log(key,':', person[key]);}"
 }

 const for_of_loop={ 
    def:"It iterates over iterable objects like arrays, strings, etc.",
syntax:"for (variable of iterable)\n { // code to be executed }",
Example:"const fruits = ['apple', 'banana', 'cherry']; \n for (let fruit of fruits) \n { console.log(fruit);}"
 }

 console.log(loop)
 console.log(for_loop)
 console.log(while_loop)
 console.log(do_whole_loop)
 console.log(for_in_loop)
 console.log(for_of_loop)