document.addEventListener('DOMContentLoaded', function() {
    // Update current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${dayOfWeek}`;

    // Update current UTC time
    const utcTime = today.toUTCString();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${utcTime}`;
});
