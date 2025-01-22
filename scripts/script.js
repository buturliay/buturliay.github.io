
// Whale travel animation
const whale = document.getElementById('whale');
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
