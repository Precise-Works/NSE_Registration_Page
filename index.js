document.addEventListener("DOMContentLoaded", function () {

    window.toggle = function () {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('show-links');
        }
    };

    // Countdown (ONLY if elements exist)
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const targetDate = new Date("June 13, 2026 00:00:00").getTime();

    function updateTimer() {
        let now = new Date().getTime();
        let distance = targetDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.innerText = days;
        if (hoursEl) hoursEl.innerText = hours;
        if (minutesEl) minutesEl.innerText = minutes;
        if (secondsEl) secondsEl.innerText = seconds;
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    let back = document.getElementById("backToHomepage");
    if (back) {
        back.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

    // EmailJS
    emailjs.init({
  publicKey: "c1gegHawJ7UgbFrAx"
});

    const form = document.getElementById("registrationForm");

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const params = {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        };

        emailjs.sendForm("service_mhj4nws", "template_0k50odg", form)
            .then(function () {
                alert("Registration Successful!");
                form.reset();
            })
           .catch(function(error){
    console.log("FULL ERROR:", error);
    alert(JSON.stringify(error));
});
    });

});