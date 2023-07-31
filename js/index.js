// const arrowButton = document.querySelectorAll(".menu-arrow");
// console.log(arrowButton);
// arrowButton.forEach((el) =>
//   el.addEventListener("click", (event) => {
//     const subMenu = event.target.parentElement.querySelector(".sub-menu");
//     subMenu.classList.toggle("open");
//   })
// );

const arrowButton = document.querySelectorAll(".parent");
console.log(arrowButton);
arrowButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
    const subMenu = event.target.parentElement.querySelector(".sub-menu");
    subMenu.classList.toggle("open");
  })
);
