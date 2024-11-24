document.querySelectorAll('.typewriter').forEach(element => {
    const text = element.getAttribute('data-text');
    element.textContent = '';
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 65);
        }
    }

    typeEffect();
});
