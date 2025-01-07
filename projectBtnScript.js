document.addEventListener("DOMContentLoaded", function () {
  const menuElem = this.querySelectorAll(".project-Btn li");
  menuElem.forEach((liElem) => {
    console.log(liElem.title);
    switch (liElem.title) {
      case "portoflioProject":
        changeParagraph();
        break;
      case "population_growth":
        break;
      case "python_machine_learning":
        break;
      case "Kotlin_team_app":
        break;
      case "JS_frontend":
        break;
      case "C#_Juicy_Jewel":
        break;
    }
  });

  function changeParagraph() {
    const paragraphElem = this.querySelector("project-info");
    paragraphElem.innerhtml = "changed";
  }
});
