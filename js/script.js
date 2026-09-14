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

// 프로젝트 - 탭메뉴
const tabs = document.querySelectorAll(".projects__nav button");
const contents = document.querySelectorAll(".projects__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    const target = tab.dataset.project;

    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
      tab.setAttribute("aria-selected", "false");
    });

    contents.forEach((content) => {
      content.classList.remove("is-active");
    });

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");

    document
      .querySelector(`.projects__content[data-project="${target}"]`)
      .classList.add("is-active");

  });
});