// 1. Basic switch-case structure example
let a = 2 + 2;

switch (a) {
    case 3:
        alert("Not enough");
        break;
    case 4:
        alert("Precisely");
        break;
    case 5:
        alert("Too much");
        break;
    default:
        alert("I don't know such values");
}

// 2. Grouping of cases (case 3 and case 5 execute the same block)
let b = 3;

switch (b) {
    case 4:
        alert("True");
        break;
    case 3:
    case 5:
        alert("Maybe you need to take math classes?");
        break;
    default:
        alert("It looks strange");
}

// 3. Handling string values from prompt (strict comparison proof)
let arg = prompt("Enter Number", "#####");

switch (arg) {
    case "0":
    case "1":
        alert("Zero or One");
        break;
    case "2":
        alert("Two");
        break;
    case "3":
        alert("It will never be");
        break;
    default:
        alert("Unknown value");
}

// 4. Browser checking via switch statement
const browser = "Safari";

switch (browser) {
    case "Edge":
        alert("You've got the Edge!");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        alert("We support these browsers too");
        break;
    default:
        alert("We hope this page looks good!");
}

// 5. The same browser checking logic, rewritten using if-else
if (browser === "Edge") {
    alert("You've got the Edge!");
} else if (
    browser === "Chrome" || 
    browser === "Firefox" || 
    browser === "Safari" || 
    browser === "Opera"
) {
    alert("We support these browsers too");
} else {
    alert("We hope this page looks good!");
}

// 6. Refactoring continuous if statements into a switch block (using unary plus for type conversion)
let num = +prompt("a", "");

switch (num) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;
}