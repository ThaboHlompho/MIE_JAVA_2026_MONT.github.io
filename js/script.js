const button = document.getElementById("showImageBtn");
const popup = document.getElementById("imagePopup");

button.addEventListener("click", function (e) {
  popup.style.display = "block";
  e.stopPropagation();
});

document.addEventListener("click", function () {
  popup.style.display = "none";
});

popup.addEventListener("click", function (e) {
  e.stopPropagation();
});

(function(){
    emailjs.init("jicGWEoZFFhUMSHz0");
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_zu2tsdv",
            "template_fa63x04",
            this
        ).then(function() {
            alert("Message sent successfully!");
            form.reset();
        }, function(error) {
            alert("Failed to send message.");
            console.log(error);
        });
    });
});

