namespace BookmarkExtension {
   export class Category {
      catWrapper: HTMLElement;
      titleWrapper: HTMLElement;
      title: HTMLInputElement;
      innerWrapper: HTMLElement;
      innerSVG;

      constructor() {
         this.catWrapper = document.createElement("div");
         this.titleWrapper = document.createElement("div");
         this.title = document.createElement("input");
         this.innerWrapper = document.createElement("div");
         this.title.className = "title";
         this.title.placeholder = "type title"
         this.catWrapper.className = "catWrapper";
         this.innerWrapper.className = "innerWrapper";
         this.titleWrapper.className = "titleWrapper";
         this.innerSVG = new SVG("innerSvg", "#213044").svg;
      }

      addNewCategory() {
         document.getElementById("wrapper").appendChild(this.catWrapper);
         this.catWrapper.appendChild(this.titleWrapper);
         this.titleWrapper.appendChild(this.title);
         this.catWrapper.appendChild(this.innerWrapper);
         this.innerWrapper.appendChild(this.innerSVG);
         this.changeIntoPlaceholder(this.title);
         this.innerSVG.addEventListener("click", () => {
            this.addNewUrl();
         })
      }

      changeIntoPlaceholder(title: HTMLInputElement) {
         title.addEventListener("keypress", e => {
            if (e.key == "Enter") {
               title.placeholder = title.value;
               title.value = "";
            }
         })
      }

      addNewUrl() {
         const newURL: URL = new URL();
         this.innerWrapper.appendChild(newURL.wrapper)
         this.innerWrapper.appendChild(this.innerSVG)
         this.innerWrapper.nextElementSibling
         newURL.addUrlBtnEvenetlistner();
      }
   }
}