// ========DROPDOWN MENU======== //

const mainLink = document.querySelectorAll("#mainmenu-link");
mainLink.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    const dropdown =
      event.currentTarget.parentElement.querySelector(".submenu");
    dropdown.classList.toggle("open");
  });

  const submenuLink = document.querySelectorAll("#submenu-link");
  submenuLink.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      event.currentTarget.parentElement.parentElement.classList.remove("open");
    });
  });
});

// ========BURGER MENU======== //

const burgerOpenBtn = document.querySelector(".checkbox");
const mobMenu = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
const wrapper = document.querySelector(".wrapper");

burgerOpenBtn.addEventListener("click", () => {
  mobMenu.classList.toggle("open");
  overlay.classList.toggle("open");
  wrapper.style.overflow = "hidden";
  if (!overlay.classList.contains("open")) {
    wrapper.style.overflow = "auto";
  }
});
overlay.addEventListener("click", () => {
  mobMenu.classList.remove("open");
  overlay.classList.remove("open");
  wrapper.style.overflow = "auto";
});
