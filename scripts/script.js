
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

whale.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    isDragging = true;
});

// Handle touch move
whale.addEventListener('touchmove', (event) => {
    if (!isDragging) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    // Update whale's position
    whaleX += (deltaX / window.innerWidth) * 100; // Convert to vw
    whaleY += (deltaY / window.innerHeight) * 100; // Convert to %

    // Clamp positions to viewport bounds
    whaleX = Math.max(0, Math.min(whaleX, 100)); // Clamp between 0vw and 100vw
    whaleY = Math.max(0, Math.min(whaleY, 100)); // Clamp between 0% and 100%

    // Update whale's styles
    whale.style.left = `${whaleX}vw`;
    whale.style.top = `${whaleY}%`;

    // Determine direction for flipping
    direction = deltaX > 0 ? 1 : -1;
    if (direction === 1) {
        whale.classList.remove('flipped');
    } else {
        whale.classList.add('flipped');
    }

    // Update start coordinates for smooth dragging
    startX = touch.clientX;
    startY = touch.clientY;
});

// Handle touch end
whale.addEventListener('touchend', () => {
    isDragging = false;
});
