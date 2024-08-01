//   script with the function to send the email

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_xi2o4t6", "template_hhvgmqe", this).then(
        (res) => {
          document.querySelector("#inputFirstName").value = "";
          document.querySelector("#inputLastName").value = "";
          document.querySelector("#inputEmail").value = "";
          document.querySelector("#inputMessage").value = "";
          alert("Thanks for send me an email! 😊");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
