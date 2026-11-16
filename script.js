const bubbles = document.querySelector('.bubbles');

function createBubble() {
    const bubble = document.createElement('div');

    bubble.classList.add('bubble');

    const size = Math.random() * 100 + 20;
    const position = Math.random() * 100;
    const duration = Math.random() * 5 + 5;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${position}%`;
    bubble.style.animationDuration = `${duration}s`;

    bubbles.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

setInterval(createBubble, 500);