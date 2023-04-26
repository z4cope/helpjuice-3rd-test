const dropLinks = document.querySelectorAll(".drop-link");
const asideMenuBtn = document.querySelector(".aside-menu-btn");
const asideMenu = document.querySelector("aside");
const closeMenu = document.querySelector(".close-aside");

asideMenuBtn.addEventListener("click", () => {
  asideMenu.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  asideMenu.style.transform = "translateX(-100%)";
  document.body.style.overflow = "scroll";
});

dropLinks.forEach((dropLink) => {
  const linkList = dropLink.nextElementSibling;
  dropLink.addEventListener("click", () => {
    const activeLinkList = document.querySelector(".links-list.active");
    if (activeLinkList && activeLinkList !== linkList) {
      activeLinkList.classList.remove("active");
    }
    linkList.classList.toggle("active");
  });
});
