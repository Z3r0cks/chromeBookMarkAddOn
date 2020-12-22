/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./svgs/deletSvg.ts" />
/// <reference path="./svgs/editSvg.ts" />
/// <reference path="./svgs/acceptSvg.ts" />

namespace BookmarkExtension {
   export class URL {
      wrapper: HTMLDivElement;
      btnWrapper: HTMLDivElement;
      url: HTMLInputElement;
      title: HTMLInputElement;
      Acceptbtn: AcceptSvg;
      deleteBtn: DeleteSvg;
      editBtn: EditSvg;


      constructor() {
         this.wrapper = document.createElement("div");
         this.btnWrapper = document.createElement("div");
         this.btnWrapper.className = "display-flex justify-c-sb flex-d-row"
         this.url = document.createElement("input");
         this.title = document.createElement("input");
         this.Acceptbtn = new AcceptSvg("acceptBtn", "#74dfd9");
         this.deleteBtn = new DeleteSvg("deleteBtn", "#74dfd9");
         this.editBtn = new EditSvg("editBtn", "#74dfd9");
         this.url.className = "url";
         this.url.placeholder = "https://www...";
         this.title.className = "urlTitle"
         this.title.placeholder = "URL title"
         this.wrapper.className = "urlWrapper"
         this.deleteBtn.svg.addEventListener("click", () => {
            this.wrapper.remove();
         })
         this.wrapper.appendChild(this.title)
         this.wrapper.appendChild(this.url)
         this.wrapper.appendChild(this.btnWrapper)
         this.btnWrapper.appendChild(this.Acceptbtn.svg)
         this.btnWrapper.appendChild(this.deleteBtn.svg)
      }

      addUrlBtnEvenetlistner() {
         this.Acceptbtn.svg.addEventListener("click", () => {

            const newUrl = document.createElement("a");
            newUrl.innerHTML = this.title.value;
            newUrl.href = this.url.value;
            newUrl.className = "newUrl"
            newUrl.target = "_blank";
            newUrl.rel = "noopener";
            if (newUrl.href && newUrl.innerHTML) {
               this.wrapper.className = "urlWrapper display-flex flex-d-row justify-c-sb"
               this.deleteBtn.svg.remove()
               this.url.remove();
               this.title.remove();
               this.Acceptbtn.svg.remove()
               this.wrapper.appendChild(newUrl);
               this.wrapper.appendChild(this.editBtn.svg);
               this.wrapper.appendChild(this.deleteBtn.svg);
            }
         })
      }
   }
}