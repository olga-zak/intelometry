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

const navDopdownMenu = document.querySelectorAll(".dropdown-open-btn");
navDopdownMenu.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    const dropdown =
      event.currentTarget.parentElement.querySelector(".submenu");
    dropdown.classList.toggle("open");
  });
});

const dropdownMenuOpenBtn = document.querySelectorAll(".dropdown");
dropdownMenuOpenBtn.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    const dropdownMenu =
      event.currentTarget.parentElement.querySelector(".dropdown-content");
    dropdownMenu.classList.toggle("show");

    dropdownMenu.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.remove("show");
    });
  });
});
