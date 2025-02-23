function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    
    const month = now.toLocaleString('default', { month: 'long' });
    
    // Format the time and date
    const time = `${addZeroPadding(hours)}:${addZeroPadding(minutes)}:${addZeroPadding(seconds)}.${addZeroPaddingMilliseconds(milliseconds)}`;
    const date = `${month} ${now.getDate()}, ${now.getFullYear()}`;

    // Update the HTML elements
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;

    // Call updateClock every 1 millisecond
    setTimeout(updateClock, 1);
}

// Function to add zero padding to numbers less than 10
function addZeroPadding(num) {
    return (num < 10 ? '0' : '') + num;
}

// Function to add zero padding to milliseconds less than 100
function addZeroPaddingMilliseconds(num) {
    return (num < 100 ? '0' : '') + (num < 10 ? '0' : '') + num;
}

// Start the clock
updateClock();
