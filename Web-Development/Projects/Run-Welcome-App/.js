function runWelcomeApp() {
    alert("Welcome");

    const name = prompt("What's your name?", "");
    let age;

    while (true) {
        let ageInput = prompt(`${name}! How old are you?`, 18);

        if (ageInput === null || ageInput.trim() === "") {
            alert("try again! Field cannot be empty")
            continue;
        }

        age = Number(ageInput);

        if (isNaN(age) || age <= 0) {
            alert("try again (numbers only)!")
            continue;
        }
        
        let isCorrect = confirm(`Is this data correct?\nName: ${name}\nAge: ${age}`);

        if (isCorrect) {
            alert(`${name}, you are ${age} years old. You are ${100 - age} years away from your 100th birthday.`);
            break
        } else {
            alert("Let's try again!");        
        }
    }
}