
// Whale click heart animation
const whale = document.getElementById('whale');

whale.addEventListener('click', () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const whaleRect = whale.getBoundingClientRect();
    heart.style.left = `${whaleRect.width / 2 - 35}px`; 
    heart.style.bottom = '60%'; 

    whale.parentElement.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
});
let position = 0; // Horizontal position in vw
let direction = 1; // 1 for right, -1 for left

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        direction = 1;
        position = Math.min(position + 5, 40); // Move right
    } else if (event.key === 'ArrowLeft') {
        direction = -1;
        position = Math.max(position - 5, -40); // Move left
    }

    // Update whale position
    whale.style.left = `${position}vw`;

    // Flip the whale if needed
    if (direction === 1) {
        whale.classList.remove('flipped');
    } else {
        whale.classList.add('flipped');
    }
});
