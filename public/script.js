const output = document.getElementById('output');

// Function to log events
function logEvent(eventType, details) {
    const logEntry = document.createElement('div');
    logEntry.innerText = `[${new Date().toLocaleTimeString()}] ${eventType}: ${details}`;
    output.appendChild(logEntry);
}

// Key events
document.addEventListener('keydown', (event) => {
    logEvent('KeyDown', `Key: ${event.key}`);
});

document.addEventListener('keyup', (event) => {
    logEvent('KeyUp', `Key: ${event.key}`);
});

// Mouse events
document.addEventListener('click', (event) => {
    logEvent('MouseClick', `Position: (${event.clientX}, ${event.clientY})`);
});

// Touch events
document.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    logEvent('TouchStart', `Position: (${touch.clientX}, ${touch.clientY})`);
});

document.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    logEvent('TouchEnd', `Position: (${touch.clientX}, ${touch.clientY})`);
});
