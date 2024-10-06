

// Dark mode toggle function
const darkModeToggle = document.getElementById('dark-mode');

darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});
