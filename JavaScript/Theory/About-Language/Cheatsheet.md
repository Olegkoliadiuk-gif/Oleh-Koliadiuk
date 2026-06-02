# JavaScript Core Fundamentals & Standards 📜

A structured guide to JavaScript (ES6+) concepts, syntax, and best practices.

## 1. Basics & Variables
JavaScript is an object-oriented, single-threaded programming language with dynamic typing. It is primarily used to create interactivity in web environments.

* **`const`**: Declares a read-only variable that cannot be reassigned after initialization.
* **`let`**: Declares a block-scoped variable that can be reassigned.
* **Scope**: The context in which variables are accessible. Variables declared inside a function are not accessible from the outside.
* **Semicolon (;)**: Used to separate instructions. Mandatory in `for` loops between initialization, condition, and increment.
* **Template Literals**: Strings wrapped in backticks (`) that allow multi-line text and expression embedding via `${}`.

### Type Conversion (Casting)
The process of converting a value from one data type to another. It can be implicit (done automatically by JS) or explicit (done intentionally by the developer).
* **Explicit Conversion**: Using built-in functions like `Number()`, `String()`, or `Boolean()` to strictly change a type.
* **Implicit Coercion**: JS automatically converts types behind the scenes (e.g., `5 + '5'` becomes `'55'` because the number is coerced into a string).
* **Tricky Case**: Standard conversion rules mean that empty strings `""`, `0`, `null`, `undefined`, and `NaN` always become `false` when converted to a Boolean (Falsy values).

## 2. Logic & Control Flow
* **`if...else`**: A control structure that executes a block of code if a condition is true, or an alternative block if it is false.
* **`switch` Statement**: A control flow structure used for multi-way branching. It evaluates an expression and matches its value against multiple `case` clauses. It performs **strict equality (`===`)** checks.
* **`break`**: A keyword used inside a `switch` block to stop execution and exit the structure. Without it, the code execution "falls through" to the next case regardless of whether it matches.
* **`default`**: A fallback clause in a `switch` statement that executes if none of the specific cases match the evaluated expression.

### Logical Operators:
* **Strict Equality (`===`)**: Returns `true` only if both value and data type are identical.
* **Logical OR (`||`)**: Returns `true` if at least one condition is true.
* **Logical AND (`&&`)**: Returns `true` only if both conditions are true.
* **Logical NOT (`!`)**: Inverts the boolean value (Logical flip).

## 3. User Interaction
Built-in global methods used to interact with the user via modal windows in a browser environment.
* **`alert()`**: Displays a modal window with a message and pauses code execution until the user clicks "OK". Returns nothing (`undefined`).
* **`prompt()`**: Displays a modal window with a text input field. Returns the string entered by the user, or `null` if the action was canceled. **Important:** It always returns a string, so explicit `Type Conversion` (like `Number(prompt())`) is required if a numerical input is expected.
* **`confirm()`**: Displays a modal window with a question and two buttons: "OK" and "Cancel". Returns `true` if "OK" is clicked, and `false` if "Cancel" is clicked.

## 4. Loops & Iteration
**Iteration** refers to one single execution of the code block inside the loop's curly braces `{}`.

* **`for` Loop**: Executes a block of code a specific number of times as long as the condition remains true.
* **`for...of` Loop**: A modern way to iterate over arrays, providing direct access to each element's value.
* **Increment (`++`)**: Increases a value by one.
* **Decrement (`--`)**: Decreases a value by one.

## 5. Data Structures (Objects & Arrays)
* **Destructuring**: A syntax that allows "unpacking" values from arrays or properties from objects into distinct variables.
* **Rest Operator (`...`)**: Collects all remaining elements or properties into a single variable. In destructuring, it must always be the last element.

### Objects
A collection of properties (key-value pairs).
* **Dot Notation**: The primary syntax for accessing object properties (e.g., `user.name`).
* **Object Mutation**: Even if an object is declared with `const`, its internal properties can be modified, added, or deleted.

### Arrays
An ordered list of values with numeric indices (starting from 0).
* **`.reduce()`**: Iteratively processes each element to reduce the array to a single value (number, string, or object).
* **`.map()`**: Creates a new array by applying a function to every element of the original array.
* **`.includes()`**: Checks if an array contains a specific value.

## 6. Functions
A reusable block of code designed to perform a specific task.
* **Parameters**: Variables listed in the function definition that act as placeholders for values.
* **Arrow Function (`=>`)**: A concise syntax that provides a shorter way to write functions.
* **`return`**: A command that stops the function execution and sends a value back to where it was called.

## 7. Productivity Snippets
* `clg` → `console.log()`
* `nfn` → `const name = (params) => {}`
