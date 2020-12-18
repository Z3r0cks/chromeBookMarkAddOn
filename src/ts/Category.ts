namespace Bookmarker {

   export class Categorie {
      catWrapper: HTMLElement;
      title: HTMLInputElement;
      innerWapper: HTMLElement;
      svg: HTMLImageElement;

      constructor() {
         this.catWrapper = document.createElement("div");
         this.title = document.createElement("input");
         this.innerWapper = document.createElement("div");
         this.svg = document.createElement("img");
         this.svg.src = './svg/plus-circle-solid.svg';
         this.svg.className = "innerSvg";
         this.title.className = "title";
         this.title.placeholder = "type title"
         this.catWrapper.className = "catWrapper";
         this.innerWapper.className = "innerWrapper";
      }

      addNewCategory() {
         document.getElementById("wrapper").appendChild(this.catWrapper);
         this.catWrapper.appendChild(this.title)
         this.catWrapper.appendChild(this.innerWapper);
         this.innerWapper.appendChild(this.svg);
         this.changeIntoPlaceholder(this.title);
         this.svg.addEventListener("click", () => {
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
         const newWrapper = document.createElement("div");
         const url = document.createElement("input");
         const title = document.createElement("input");
         const btn = document.createElement("btn");
         btn.className = "urlBtn";
         btn.innerHTML = "accept";
         url.className = "url";
         url.placeholder = "https://www...";
         title.className = "urlTitle"
         title.placeholder = "URL title"
         newWrapper.className = "urlWrapper"
         this.innerWapper.appendChild(newWrapper)
         console.log(this.svg);
         this.innerWapper.appendChild(this.svg)
         this.innerWapper.nextElementSibling
         newWrapper.appendChild(title)
         newWrapper.appendChild(url)
         newWrapper.appendChild(btn)
         this.addUrlBtnEvenetlistner(btn, url, newWrapper, title);
      }

      addUrlBtnEvenetlistner(btn, url, wrapper, title) {
         btn.addEventListener("click", () => {
            const newUrl = document.createElement("a");
            newUrl.innerHTML = title.value;
            newUrl.href = url.value;
            newUrl.className = "newUrl"
            newUrl.target = "_blank";
            newUrl.rel = "noopener";
            if (newUrl.href && newUrl.innerHTML) {
               url.remove();
               title.remove();
               btn.remove()
               wrapper.appendChild(newUrl);
            }
         })
      }
   }
}