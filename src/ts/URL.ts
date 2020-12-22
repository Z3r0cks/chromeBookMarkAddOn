namespace BookmarkExtension {
   export class URL {
      wrapper: HTMLDivElement;
      url: HTMLInputElement;
      title: HTMLInputElement;
      btn: HTMLButtonElement;
      deleteBtn: HTMLButtonElement;

      constructor() {
         this.wrapper = document.createElement("div");
         this.url = document.createElement("input");
         this.title = document.createElement("input");
         this.btn = document.createElement("button");
         this.deleteBtn = document.createElement("button");
         this.btn.className = "urlBtn";
         this.btn.innerHTML = "accept";
         this.deleteBtn.className = "deleteBtn";
         this.deleteBtn.innerHTML = "delete";
         this.url.className = "url";
         this.url.placeholder = "https://www...";
         this.title.className = "urlTitle"
         this.title.placeholder = "URL title"
         this.wrapper.className = "urlWrapper"
         this.deleteBtn.addEventListener("click", () => {
            this.wrapper.remove();
         })
         this.wrapper.appendChild(this.title)
         this.wrapper.appendChild(this.url)
         this.wrapper.appendChild(this.btn)
         this.wrapper.appendChild(this.deleteBtn)
      }

      addUrlBtnEvenetlistner() {
         this.btn.addEventListener("click", () => {
            const newUrl = document.createElement("a");
            newUrl.innerHTML = this.title.value;
            newUrl.href = this.url.value;
            newUrl.className = "newUrl"
            newUrl.target = "_blank";
            newUrl.rel = "noopener";
            if (newUrl.href && newUrl.innerHTML) {
               this.deleteBtn.remove()
               this.url.remove();
               this.title.remove();
               this.btn.remove()
               this.wrapper.appendChild(newUrl);
               this.wrapper.appendChild(this.deleteBtn)
            }
         })
      }
   }
}