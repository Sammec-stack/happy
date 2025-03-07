document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("show-gallery").addEventListener("click", function () {
        document.querySelector(".gallery").style.display = "block";

        setTimeout(() => {
            document.querySelectorAll(".image-box img").forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add("show");
                }, index * 200);
            });
        }, 100);
    });

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});

window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add("show");
        }
    });
});