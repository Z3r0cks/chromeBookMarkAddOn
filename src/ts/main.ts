/// <reference path="./Category.ts" />
/// <reference path="./svg.ts" />

namespace BookmarkExtension {


   const svg = new SVG("svg", "#74dfd9").svg
   const wrapper: HTMLElement = document.createElement("div");
   wrapper.className = "wrapper";
   document.body.appendChild(wrapper);

   wrapper.appendChild(svg);
   svg.addEventListener('click', () => {
      const test: Category = new Category();
      test.addNewCategory();
   })
}
