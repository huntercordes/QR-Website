document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.qr-box');
    let currentShakingBox = null;

    function pickRandomBox() {
        // Remove the shake class from the currently shaking box
        if (currentShakingBox) {
            currentShakingBox.classList.remove('shake');
        }

        // Pick a random box
        const randomIndex = Math.floor(Math.random() * boxes.length);
        currentShakingBox = boxes[randomIndex];
        currentShakingBox.classList.add('shake');
    }

    // Change the shaking box every 3 seconds
    setInterval(pickRandomBox, 4000);

    // Start the first pick
    pickRandomBox();
});