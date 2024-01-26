function toggleMenu() {
  let menuIcon = document.getElementById("menu-icon");
  let menuList = document.querySelector(".menu-list");
  let isMenu =
    menuList.style.display === "none" || menuList.style.display === "";
  menuList.style.display = isMenu ? "flex" : "none";

  menuIcon.innerHTML = isMenu
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
}

function hideLoader() {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelector(".content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  // Simulate content loading delay (remove this in production)
  setTimeout(function () {
    hideLoader();
  }, 2000);

  // Set the date we're counting down to
  const countDownDate = new Date("March 2, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  const x = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) days = "0" + days;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display the countdown in the "timer" element
    document.getElementById("timer").innerHTML =
      days + " : " + hours + " : " + minutes + " : " + seconds;

    document.getElementById("daysleft").innerHTML = days;

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "";
      document.getElementById("ismarried").innerHTML =
        "Woohoo, We are Married &#10084;";
    }
  }, 1000);
});
