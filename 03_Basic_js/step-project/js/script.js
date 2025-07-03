let ourServicesMenu = document.querySelectorAll(".our-services-list-item");
let ourServicesDescription = document.querySelectorAll(
  ".our-services-description-item"
);
ourServicesMenu.forEach((nav) => {
  nav.addEventListener("click", function (event) {
    event.preventDefault();

    let selectedTitle = nav.getAttribute("data-title");

    ourServicesDescription.forEach((description) => {
      let querentDesc = description.getAttribute("data-description");

      

    });
  });
});
