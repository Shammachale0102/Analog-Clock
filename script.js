function rotateClockHands() {
    const currentDate = new Date();

    const totalSeconds = currentDate.getSeconds() + currentDate.getMinutes() * 60 + currentDate.getHours() * 3600;

    // Calculate rotation angles for each hand based on total elapsed seconds
    const hourRotation = (totalSeconds / 43200) * 360; // 12 hours in seconds, 360 degrees in a full circle
    const minuteRotation = (totalSeconds / 3600) * 360; // 60 minutes in seconds, 360 degrees in a full circle
    const secondRotation = (totalSeconds / 60) * 360; // 60 seconds in minutes, 360 degrees in a full circle

    // Update clock hands with the calculated rotation angles
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update clock hands every 1000 milliseconds (1 second)
setInterval(rotateClockHands, 1000);

// Initial call to set correct initial position of clock hands
rotateClockHands();
