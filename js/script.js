// 헤더 - 탭메뉴
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header__nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 100;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("is-active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("is-active");
    }

  });

});