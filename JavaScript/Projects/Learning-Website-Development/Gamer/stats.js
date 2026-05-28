const savedTheme = localStorage.getItem('theme');
const winrateElement = document.getElementById('stat-winrate');
const matchesElement = document.getElementById('stat-matches');
const roleElement = document.getElementById('stat-role');

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

const resetBtn = document.getElementById('reset_stats_btn');

resetBtn.addEventListener('click', function() {
    let confirmReset = prompt('Type "RESET" to clear your statistics:');
    if (confirmReset === null) return;
    
    if (confirmReset.trim() === "RESET") {
        alert("Statistics has been reset.");
        winrateElement.textContent = "0%";
        matchesElement.textContent = "0";
        roleElement.textContent = "None";
    } else {
        alert("Action canceled or wrong keyword.");
    }
});