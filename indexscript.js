document.addEventListener("DOMContentLoaded", function () {
  const menuElem = this.querySelectorAll(".dropdown-list li");
  menuElem.forEach((liElem) => {
    console.log(liElem.title);
    switch (liElem.title) {
      case "My Story":
        liElemOnMouseClickHandler(liElem, "./MyStory.html");
        liElemOnMouseHoverHandler(liElem);
        liElemOnMouseOutHandler(liElem);
        break;
      case "projects":
        liElemOnMouseClickHandler(liElem, "./projects.html");
        liElemOnMouseHoverHandler(liElem);
        liElemOnMouseOutHandler(liElem);
        break;
      case "about":
        liElemOnMouseClickHandler(liElem, "./about.html");
        liElemOnMouseHoverHandler(liElem);
        liElemOnMouseOutHandler(liElem);
        break;
      case "login":
        liElemOnMouseClickHandler(liElem, "./login.html");
        liElemOnMouseHoverHandler(liElem);
        liElemOnMouseOutHandler(liElem);
        break;

        function liElemOnMouseHoverHandler(element) {
          element.addEventListener("mouseover", () => {
            element.classList.toggle("dropdown-button-highlited");
          });
        }
        function liElemOnMouseOutHandler(element) {
          element.addEventListener("mouseout", () => {
            element.classList.toggle("dropdown-button-highlited");
          });
        }
        function liElemOnMouseClickHandler(element, urlToGo) {
          element.addEventListener(
            "click",
            () => (window.location.href = urlToGo)
          );
        }
    }
  });
});
