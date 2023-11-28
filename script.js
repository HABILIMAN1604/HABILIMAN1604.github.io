/*validate form fields before submission*/
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        var name = form.querySelector('#name').value.trim();
        var email = form.querySelector('#email').value.trim();
        var message = form.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});




/*Animations on hover for project cards.*/
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




/*colour change for navigation bar*/
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




/*hamburger menun button for better mobiled view*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mobile-menu').addEventListener('click', function () {
        document.querySelector('nav ul').classList.toggle('active');
    });
});




/*added animations for project cards*/
document.addEventListener("DOMContentLoaded", function () {
    var projects = document.querySelectorAll(".project");

    projects.forEach(function (project) {
        project.addEventListener("click", function () {
            var projectInfo = this.querySelector(".project-info");
            if (projectInfo) {
                projectInfo.classList.toggle("visible");
            }
        });

        project.addEventListener("mouseover", function () {
            var projectImage = this.querySelector("img");
            var projectInfo = this.querySelector(".project-info");

            if (projectImage) {
                projectImage.style.transform = "scale(1.1)";
            }

            if (projectInfo) {
                projectInfo.style.opacity = 1;
            }
        });

        project.addEventListener("mouseout", function () {
            var projectImage = this.querySelector("img");
            var projectInfo = this.querySelector(".project-info");

            if (projectImage) {
                projectImage.style.transform = "scale(1)";
            }

            if (projectInfo) {
                projectInfo.style.opacity = 0;
            }
        });
    });
});



