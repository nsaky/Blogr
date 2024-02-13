const menuBtn = document.getElementById("menu");
const closeBtn = document.querySelector(".close");
const navLink = document.querySelector(".items");
const metaMenu = document.querySelectorAll(".meta-menu");
const menuItem = document.querySelectorAll(".menu-item");
const arrows = document.querySelectorAll(".arrow");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("hide");
    closeBtn.classList.add("show");
    navLink.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    menuBtn.classList.remove("hide");
    closeBtn.classList.remove("show");
    navLink.classList.remove("show");
});

menuItem.forEach((menu, idx) => {
    menu.addEventListener("click", () => {
        metaMenu.forEach((meta, index) => {
        if (metaMenu[idx].classList.contains("show")) {
            metaMenu[idx].classList.add("show");
            menuItem[idx].classList.add("active");
            arrows[idx].classList.add("rotate");
        } else {
            menuItem[index].classList.remove("active");
            meta.classList.remove("show");
            arrows[index].classList.remove("rotate");
        }
        });
        metaMenu[idx].classList.toggle("show");
        menu.classList.toggle("active");
        arrows[idx].classList.toggle("rotate");
    });
});
