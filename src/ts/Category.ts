namespace BookmarkExtension {
   export class Category {
      catWrapper: HTMLElement;
      titleWrapper: HTMLElement;
      title: HTMLInputElement;
      innerWrapper: HTMLElement;
      innerSVG: SVGElement;

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
         this.innerSVG = new AddSVG("innerSvg", "#213044").svg;
      }

      addNewCategory() {
         document.getElementById("wrapper").appendChild(this.catWrapper);
         this.catWrapper.appendChild(this.titleWrapper);
         this.titleWrapper.appendChild(this.title);
         this.catWrapper.appendChild(this.innerWrapper);
         this.innerWrapper.appendChild(this.innerSVG);
         this.changeIntoPlaceholder(this.title);
         this.innerSVG.addEventListener("click", () => {
            Category.addNewUrl(this.innerSVG);
         })
      }

      changeIntoPlaceholder(title: HTMLInputElement) {
         title.addEventListener("keypress", e => {
            if (e.key == "Enter") {
               title.placeholder = title.value;
               title.value = "";
               title.blur();
            }
         })
      }

      static addNewUrl(innerSVG: SVGElement) {
         const newURL: URL = new URL();
         innerSVG.parentElement.appendChild(newURL.wrapper)
         innerSVG.parentElement.appendChild(innerSVG)
         innerSVG.parentElement.nextElementSibling
         newURL.addUrlBtnEvenetlistner();
      }
   }
}