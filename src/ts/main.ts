/// <reference path="./Category.ts" />

namespace Bookmarker {
   const wrapper: HTMLElement = document.getElementById("wrapper");
   const svg = document.createElement("img");
   svg.src = './svg/plus-circle-solid.svg';
   svg.className = "svg";

   wrapper.appendChild(svg);
   svg.addEventListener('click', () => {
      const test: Categorie = new Categorie();
      test.addNewCategory();
   })
}
