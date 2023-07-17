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

const schoolImages = [
  " https://media.istockphoto.com/id/1363289778/photo/british-secondary-school.jpg?s=1024x1024&w=is&k=20&c=mBxiguG3CdnbWAvrdnMxE6ndH2M7zZxcXOR57IVQMZw=",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
];

let index=0;
