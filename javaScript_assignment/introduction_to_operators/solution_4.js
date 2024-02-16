let a="In JavaScript, operators have precedence and associativity, which determine the order in which operators are evaluated in an expression."
let b="Precedence: Precedence determines the order of operations. Operators with higher precedence are evaluated first. For example, in the expression 2 + 3 * 4, the multiplication (*) has higher precedence than the addition (+), so 3 * 4 is evaluated first, resulting in 2 + 12, which equals 14."
let c="Associativity: Associativity defines the order in which operators of the same precedence are evaluated. It can be left-to-right (left-associative) or right-to-left (right-associative). For example, the subtraction operator (-) is left-associative, so 10 - 2 - 1 is evaluated as (10 - 2) - 1, resulting in 7."
let d="Understanding these concepts is important for writing correct and predictable code. Without understanding precedence and associativity, you might write expressions that are evaluated in unexpected ways, leading to bugs or incorrect results. For example, consider the expression a = b = 5. If you don't understand that the assignment operator (=) has right-to-left associativity, you might expect a to be 5 and b to be undefined, but in reality, both a and b will be 5."

console.log(a)
console.log(b)
console.log(c)
console.log(d)