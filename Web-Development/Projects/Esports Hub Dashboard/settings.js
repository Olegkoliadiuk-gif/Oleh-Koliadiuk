const themeBtn = document.getElementById('toggle_theme_btn');
const body = document.body;
const themeText = document.getElementById('theme-text');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeText.textContent = "Theme: Light";
    themeBtn.textContent = "Toggle Dark Theme";
}

themeBtn.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        themeText.textContent = "Theme: Light";
        themeBtn.textContent = "Toggle Dark Theme";
        localStorage.setItem('theme', 'light');
    } else {
        themeText.textContent = "Theme: Dark";
        themeBtn.textContent = "Toggle Light Theme";
        localStorage.setItem('theme', 'dark');
    }
});