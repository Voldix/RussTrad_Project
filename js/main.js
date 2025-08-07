// Cекция "Меню"
const menuBtns = document.querySelectorAll("[data-role]");
const up = document.querySelector(".vl-menu");

if (menuBtns.length > 0) {
    const menuContent = document.querySelectorAll("[data-content]");
    const menuImg = document.querySelectorAll("[data-img]");
    const menuHideBtn = document.querySelectorAll(".vl-menu__list-btn");

    menuBtns.forEach((item) => {
        item.addEventListener("click", () => {
            const thisData = item.getAttribute("data-role");

            const isActive = item.classList.contains("btn-active");

            // Сначала убираем классы у всех
            document
                .querySelectorAll(".vl-menu-btn.btn-active")
                .forEach((el) => el.classList.remove("btn-active"));
            document
                .querySelectorAll(".vl-menu__list-wrapper.vl-active")
                .forEach((el) => el.classList.remove("vl-active"));
            menuImg.forEach((img) => img.classList.add("vl-shadow")); // вернуть тень всем

            // Если ранее не был активен — активируем
            if (!isActive) {
                item.classList.add("btn-active");

                menuImg.forEach((e) => {
                    if (e.getAttribute("data-img") == thisData) {
                        e.classList.remove("vl-shadow");
                    }
                });

                menuContent.forEach((el) => {
                    if (el.getAttribute("data-content") == thisData) {
                        el.classList.add("vl-active");
                    }
                });
            }
            // Если был активен — просто всё уже убрано, ничего не делать
        });
    });

    if (menuHideBtn.length > 0) {
        menuHideBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".vl-menu-btn.btn-active").forEach((el) => el.classList.remove("btn-active"));
                document.querySelectorAll(".vl-menu__list-wrapper.vl-active").forEach((el) => el.classList.remove("vl-active"));
                menuImg.forEach((img) => img.classList.add("vl-shadow"));
                window.scrollTo(0, up.offsetTop);
            });
        });
    }
}

// Слайдер
document.querySelectorAll(".al-production-item").forEach((el) => {
    let content = el.querySelector(".al-production-text");
    let plus = el.querySelector(".al-production-plus-img");

    if (window.innerWidth < 768) {
        plus.classList.remove("none");
        content.classList.add("none");

        el.addEventListener("click", (e) => {
            e.preventDefault();

            content.classList.toggle("none");

            if (content.classList.contains("none")) {
                el
                    .querySelector(".al-production-plus-img")
                    .closest(
                        ".al-production-plus"
                    ).style.cssText = `align-items: center`;
                el.querySelector(
                    ".al-production-plus-img"
                ).style.cssText = `transform: rotate(90deg); `;
            } else {
                el
                    .querySelector(".al-production-plus-img")
                    .closest(
                        ".al-production-plus"
                    ).style.cssText = `align-items:end `;
                el.querySelector(
                    ".al-production-plus-img"
                ).style.cssText = `transform: rotate(45deg);  `;
            }
        });
    }

    if (window.innerWidth >= 768) {
        plus.classList.add("none");
        content.classList.remove("none");
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
            plus.classList.remove("none");
            content.classList.add("none");

            el.addEventListener("click", (e) => {
                e.preventDefault();

                content.classList.toggle("none");

                if (content.classList.contains("none")) {
                    el
                        .querySelector(".al-production-plus-img")
                        .closest(
                            ".al-production-plus"
                        ).style.cssText = `align-items: center`;
                    el.querySelector(
                        ".al-production-plus-img"
                    ).style.cssText = `transform: rotate(90deg); `;
                } else {
                    el
                        .querySelector(".al-production-plus-img")
                        .closest(
                            ".al-production-plus"
                        ).style.cssText = `align-items:end `;
                    el.querySelector(
                        ".al-production-plus-img"
                    ).style.cssText = `transform: rotate(45deg);  `;
                }
            });
        }

        if (window.innerWidth >= 768) {
            plus.classList.add("none");
            content.classList.remove("none");
        }
    });
});

$(document).ready(function () {
    var owl = $(".trust-carousel").owlCarousel({
        loop: true,
        margin: 19,
        nav: true,
        dots: false,
        navText: [
            '<img src="./img/vl-trust/prev.png" alt="arrow_left">',
            '<img src="./img/vl-trust/next.png" alt="arrow_right">',
        ],
        responsive: {
            0: { items: 1, dots: true, navText: false },
            768: { items: 4 },
        },
    });

    owl.on("resized.owl.carousel", function () {
        owl.trigger("refresh.owl.carousel");
    });
});



//  Аккордеон
document.querySelectorAll('.al-acc-item').forEach((el) =>{
    const content = el.querySelector('.al-acc-text');

    el.addEventListener('click', () => {
        content.classList.toggle('none');

        if (content.classList.contains('none')) {
                content.style.maxHeight = "0px";
                el.querySelector(".al-acc-plus-img").closest(".al-acc-plus").style.cssText = `align-self: center`;
                el.querySelector('.al-acc-plus-img').style.cssText = `transform: rotate(90deg);`;
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
                el.querySelector(".al-acc-plus-img").closest(".al-acc-plus").style.cssText = `align-self: flex-end; margin-bottom: 26px;`;
                el.querySelector('.al-acc-plus-img').style.cssText = `transform: rotate(45deg);`;
            }
    });
});