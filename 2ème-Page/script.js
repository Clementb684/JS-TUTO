  // JavaScript goes here
  document.addEventListener("DOMContentLoaded", function () {
    function createParagraph() {
      let para = document.createElement("p");
      para.textContent = "vous avez cliqué sur le bouton!";
      document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", createParagraph);
    }
  });