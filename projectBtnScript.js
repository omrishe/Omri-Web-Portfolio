document.addEventListener("DOMContentLoaded", function () {
  const menuElem = this.querySelectorAll(".projects-list li");
  console.log(menuElem);
  menuElem.forEach((liElem) => {
    console.log(liElem.title);
    switch (liElem.title) {
      case "portoflioProject":
        OnMouseClickHandler(liElem, "portoflioProject");
        break;
      case "population_growth":
        OnMouseClickHandler(liElem, "population_growth");
        break;
      case "python_machine_learning":
        OnMouseClickHandler(liElem, "python_machine_learning");
        break;
      case "Kotlin_team_app":
        OnMouseClickHandler(liElem, "Kotlin_team_app");
        break;
      case "JS_frontend":
        OnMouseClickHandler(liElem, "JS_frontend");
        break;
      case "C#_Juicy_Jewel":
        OnMouseClickHandler(liElem, "C#_Juicy_Jewel");
        break;
    }
  });
  function OnMouseClickHandler(element, textToChange) {
    element.addEventListener("click", () => changeParagraph(textToChange));
  }

  function changeParagraph(textToChange) {
    const paragraphElem = document.querySelector(".project-info");
    paragraphElem.innerHTML = textToChange;
  }
});
