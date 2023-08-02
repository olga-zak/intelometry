// const arrowButton = document.querySelectorAll(".parent");
// arrowButton.forEach((el) =>
//   el.addEventListener("click", (event) => {
//     event.preventDefault();
//     const subMenu = event.target.parentElement.querySelector(".sub-menu");
//     subMenu.classList.toggle("open");
//   })
// );

const burgerOpenBtn = document.querySelector(".checkbox");
burgerOpenBtn.addEventListener("click", () => {
  const mobMenu = document.querySelector(".navigation");
  mobMenu.classList.toggle("open");
});

const dropdownMenuOpenBtn = document.querySelectorAll(".dropdown");
dropdownMenuOpenBtn.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();

    const dropdownMenu =
      event.target.parentElement.querySelector(".dropdown-content");
    dropdownMenu.classList.toggle("show");

    dropdownMenu.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.remove("show");
    });
  });
});
