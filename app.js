document.querySelector('.wrapper').addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const heart = document.createElement('div');
    heart.className = 'heart-modal';

    const text = document.createElement('div');
    text.className = 'heart-text';
    text.textContent = 'Мое сердце бьется чаще, когда ты рядом! Ты мое счастье!        🖤';
    heart.appendChild(text);

    overlay.appendChild(heart);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (!heart.contains(e.target)) {
            overlay.remove();
        }
    });
});
