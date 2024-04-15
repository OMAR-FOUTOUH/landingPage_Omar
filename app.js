// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Select all elements with the class 'hidden' using document.querySelectorAll
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden2');


// Observe each element in the NodeList
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("Hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Set the target date and time (adjust as needed)
const targetDate = new Date("2024-04-20T10:00:00");

function updateTime() {
    // Calculate the time difference between now and the target date
    const now = Date.now();
 
    const timeDiff = targetDate.getTime() - now;

    if (timeDiff <= 0) {
        // When the countdown reaches zero or below, stop the interval
        clearInterval(interval);
        daysElement.innerHTML = "0";
        hoursElement.innerHTML = "0";
        minutesElement.innerHTML = "0";
        secondsElement.innerHTML = "0";
        return; // Stop executing the function
    }

    // Calculate the time components
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    daysElement.innerHTML = days.toString().padStart(2, '0');
    hoursElement.innerHTML = hours.toString().padStart(2, '0');
    minutesElement.innerHTML = minutes.toString().padStart(2, '0');
    secondsElement.innerHTML = seconds.toString().padStart(2, '0');
}

// Call the updateTime function immediately and set an interval to call it every second
updateTime();
const interval = setInterval(updateTime, 1000);
