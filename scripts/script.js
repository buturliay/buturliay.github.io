// // Function to create a floating cloud
// function createCloud() {
//     const cloud = document.createElement('div');
//     cloud.className = 'cloud';

//     // Start clouds slightly off-screen on the left
//     cloud.style.left = '-5vw';
//     cloud.style.bottom = `${Math.random() * 50 + 50}vh`; // Random height between 10vh and 40vh

//     // Set the transparency and z-index to ensure it's in the background
//     cloud.style.opacity = '0.5'; // Semi-transparent
//     cloud.style.zIndex = '-1'; // Behind all other elements

//     // Random duration for cloud movement
//     const duration = Math.random() * 10 + 10; // Between 10s and 20s
//     cloud.style.animation = `cloudFloat ${duration}s linear`;

//     // Append the cloud to the document body
//     document.body.appendChild(cloud);

//     // Remove the cloud after its animation completes
//     setTimeout(() => {
//         cloud.remove();
//     }, duration * 1000);
// }

// // Call createCloud every 3 seconds
// setInterval(createCloud, 3000);

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