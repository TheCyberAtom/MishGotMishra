document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function (response) {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent successfully!");
        contactForm.reset();
      },
      function (error) {
        console.error("Failed to send email. Error:", error);
        alert(
          "An error occurred while sending your message. Please try again later."
        );
      }
    );
  });
});
