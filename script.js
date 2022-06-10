let daysDisplay = document.querySelector("#days");
let hoursDisplay = document.querySelector("#hours");
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");

let targetDate = new Date("Jan 5, 2024 15:37:25").getTime();

let countdown = setInterval(() => {
  let now = new Date().getTime();
  let distance = targetDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysDisplay.innerText = days;
  hoursDisplay.innerText = hours;
  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    alert("Time Up!! 🎉🎉🎉");
  }
}, 1000);
