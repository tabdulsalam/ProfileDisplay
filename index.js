// current day of the week
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateTime() {
  const currentDayElement = document.getElementById("Current-day-Value");
  const date = new Date();
  const currentDayIndex = date.getDay();
  currentDayElement.innerText = daysOfTheWeek[currentDayIndex];

  // current time in milliseconds

  const currentTimeElement = document.getElementById("current-utc-time-value");
  currentTimeElement.innerText = Date.now();
}
setInterval(updateTime, 1000);
