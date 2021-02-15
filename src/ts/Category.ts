namespace BookmarkExtension {
   export class Category {
      catWrapper: HTMLDivElement;
      catWrapperColor: string;
      titleWrapper: HTMLElement;
      title: HTMLInputElement;
      titleColor: string;
      innerWrapper: HTMLElement;
      innerSVG: SVGElement;
      urlArray: URL[];

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
         this.urlArray = [];
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
               Category.addNewUrl(this.innerSVG, this.urlArray);
            })
         }
      }

      static pushIntoURLArray(urlArray: URL[], URL: URL) {
         urlArray.push(URL);
      }

      static pushURLinURLArray(urlArray: URL[], url: URL) {
         urlArray.push(url);
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

      static addNewUrl(innerSVG: SVGElement, urlArray: URL[]) {
         const newURL: URLWrapper = new URLWrapper(urlArray);
         innerSVG.parentElement.appendChild(newURL.wrapper)
         innerSVG.parentElement.appendChild(innerSVG)
         innerSVG.parentElement.nextElementSibling
         newURL.addUrlBtnEvenetlistner();
      }
   }
}