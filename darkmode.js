

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dark-mode');

    if (toggle) {
        toggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode', toggle.checked);
        });
    }
});
