document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
    // Validate form fields
        var name = form.querySelector('#name').value.trim();
        var email = form.querySelector('#email').value.trim();
        var message = form.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var projectCards = document.querySelectorAll('.project');

    projectCards.forEach(function (card) {
        card.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "#ffd700"; // Change color on hover
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "white"; // Change color back on mouseout
        });
    });
});



