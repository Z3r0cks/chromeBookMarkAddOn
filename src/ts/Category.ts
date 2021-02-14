namespace BookmarkExtension {
   export class Category {
      catWrapper: HTMLDivElement;
      catWrapperColor: String;
      titleWrapper: HTMLElement;
      title: HTMLInputElement;
      titleColor: string;
      innerWrapper: HTMLElement;
      innerSVG: SVGElement;

      constructor() {
         this.catWrapper = document.createElement("div");
         this.catWrapperColor = "#11adb8"
         this.titleWrapper = document.createElement("div");
         this.title = document.createElement("input");
         this.innerWrapper = document.createElement("div");
         this.title.className = "title";
         this.title.placeholder = "type title"
         this.titleColor = "#74dfd9";
         this.catWrapper.className = "catWrapper";
         this.innerWrapper.className = "innerWrapper";
         this.titleWrapper.className = "titleWrapper";
         this.innerSVG = new AddSVG("innerSvg", "#213044").svg;
         Category.setBGColor(this.catWrapper, this.catWrapperColor);
         Category.setBGColor(this.title, this.titleColor);
      }

      addNewCategory() {
         const wrapperEl = document.getElementById("wrapper");
         if (wrapperEl.children.length <= 3) {
            wrapperEl.appendChild(this.catWrapper);
            this.catWrapper.appendChild(this.titleWrapper);
            this.titleWrapper.appendChild(this.title);
            this.catWrapper.appendChild(this.innerWrapper);
            this.innerWrapper.appendChild(this.innerSVG);
            Category.changeIntoPlaceholder(this.title);
            this.innerSVG.addEventListener("click", () => {
               Category.addNewUrl(this.innerSVG);
            })
         }
      }

      static setBGColor(HTMLel: HTMLDivElement, color: String) {
         HTMLel.setAttribute("style", " background-color:" + color);
      }

      static changeIntoPlaceholder(title: HTMLInputElement) {
         title.addEventListener("blur", () => {
            title.placeholder = title.value;
            title.value = "";
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