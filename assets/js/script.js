document
    .querySelectorAll(".navbar-collapse .nav-link")
    .forEach((link) => {
        link.addEventListener("click", function (e) {
            let section = document.querySelector(e.target.getAttribute("href"));
            if (section) {
                e.preventDefault();
                let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
                window.scroll({
                    top: section.offsetTop - navbarHeight,
                    behavior: "smooth",
                });
                document
                    .querySelector(".navbar-collapse")
                    .classList.remove("show");
            }
        });
    });