let a={
    def:"Conditional statements are used in programming to execute different code blocks based on certain conditions. In JavaScript, there are mainly three types of conditional statements: `if`, `else if`, and `else`.",

    if_statement:" It executes a block of code if a specified condition is true.\n if (condition)\n { // code to be executed if condition is true \n } \n Example: \n javascript \n let hour = 10; \n if (hour < 12) { console.log('Good morning!');}",
    if_else_statement:"It executes a block of code if the condition is true and another block of code if the condition is false. \njavascript \n if (condition) \n{ // code to be executed if condition is true} else \n{ // code to be executed if condition is false } \nExample: \njavascript \nlet hour = 15; if (hour < 12) \n{console.log('Good morning!');} \n else {console.log('Goodafternoon!');}",
    else_if_statement:"It allows you to check multiple conditions and execute a different block of code for each condition. \n javascript \n if (condition1) \n {// code to be executed if condition1 is true }\n else if (condition2)\n {// code to be executed if condition2 is true }\n else {  // code to be executed if neither condition1 nor condition2 is true}\nExample:javascript \n let time = 20; \n if (time < 12) \n { console.log('Good morning!');} \n else if (time < 18) \n{console.log('Good afternoon!');}\n else \n{console.log('Good evening!');}",
    
  extra:"These are the basic conditional statements in JavaScript. They allow you to control the flow of your program based on different conditions."
}
console.log(a)