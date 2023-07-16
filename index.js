const hamburger = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show_sidebar");
  console.log(sidebar.classList);
  if (sidebar.classList.contains("show_sidebar")) {
    hamburger.classList.replace("fa-bars", "fa-times");
  } else {
    hamburger.classList.replace("fa-times", "fa-bars");
  }
  //   console.log(hamburger.classList.contains("hamburger"));
  //   if (hamburger.classList.contains("fa-bars")) {
  //     hamburger.firstElementChild.classList.replace("fa-bars", "fa-times");
  //   } else {
  //     hamburger.firstElementChild.classList.replace("fa-times", "fa-bars");
  //   }
});


