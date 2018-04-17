- **Javascript**
1. What are the differences between a variable that is: `null`, `undefined`?
  * In JavaScript, undefined means a variable has been declared but has not yet been assigned a value.
  * Null is an assignment value. It can be assigned to a variable as a representation of no value.
  * Undefined is a type itself (undefined) while null is an object.
  * null !== undefined but null == undefined
2. What is `use strict`?
  * The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5).
  * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
  * With strict mode, you can not use undeclared variables.
  * Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
  * Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).
  * Declared inside a function, it has local scope (only the code inside the function is in strict mode).
** what are the advantages and disadvantages to using it?
-Advantages:
  * Strict mode makes it easier to write "secure" JavaScript.
  * Strict mode changes previously accepted "bad syntax" into real errors.
  * As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
  * In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
  * In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
-Disadvantages:
  * Making js access is harder for beginners.
3. What are the differences between `==` and `===`?
  * == different from === in the point that === will compare both the type and value, if two fields have the same data type and the same value will return true, If one of the two conditions is not satisfied then returns false although the same value. With ==, it automatically forces the data type to compare values ​​so if you compare a string and a number like '22' and 22 then the result will return true.

 + Ex:  ==: '22' == 22 ---> returns true
 + Ex:  ===: '22' === 22 ---> returns false since this case is comparing strings and numbers so the same value but the result is still false.
4. What is different between declaration: `var`, `const` and `let`?
  `var`: The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.
  `let`: The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.
  `const`: const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.
