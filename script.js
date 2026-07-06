document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for nav links
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple animation on scroll
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            if (
                scrollPos > section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight
            ) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "0.5s";
            } else {
                section.style.opacity = "0.8";
                section.style.transform = "translateY(10px)";
            }
        });
    });

});
