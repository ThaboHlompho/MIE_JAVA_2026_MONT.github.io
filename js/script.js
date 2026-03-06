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