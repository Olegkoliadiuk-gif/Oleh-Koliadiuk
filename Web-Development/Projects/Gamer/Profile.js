const change_status_btn = document.getElementById('change_status_btn');
const status = document.querySelector('.status');
const savedTheme = localStorage.getItem('theme');
const profile = document.getElementById('Profile');
const stats = document.getElementById('Stats');
const settings = document.getElementById('Settings')

change_status_btn.addEventListener('click', function(){ 
    let new_status = prompt('Enter New Status (Online, Do Not Disturb, Away, Offline)', `${change_status_btn.textContent}`);

    if (new_status === null) {
        return;
    } else if (new_status.trim() === "") {
        alert("Status cannot be empty. Try again.");
        return;
    } else if (new_status === "Online") {
        status.textContent = "Status: Online";
    } else if (new_status === "Do Not Disturb") {
        status.textContent = "Status: Do Not Disturb";
    } else if (new_status === "Away") {
        status.textContent = "Status: Away";
    } else if (new_status === "Offline") {
        status.textContent = "Status: Offline";
    } else {
        alert("Incorrect Status. Try Again Later.");
    };

});

profile.addEventListener('click', function() {
    return;
})

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}