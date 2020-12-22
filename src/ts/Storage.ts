namespace BookmarkExtension {
   export class Storage {
      innerBodyHtml: string;

      constructor(innerBodyHtml: string) {
         this.innerBodyHtml = innerBodyHtml;
         this.disassmbleElements();
      }

      disassmbleElements() {
         document.body.innerHTML = ""
         document.body.innerHTML = this.innerBodyHtml;

         for (const bodyChildren of document.body.children) {
            if (bodyChildren.getAttribute("id") == "wrapper") {
               for (const wrapperEl of bodyChildren.children) {
                  if (wrapperEl.getAttribute("class") == "svg") {
                     this.setSVGEventlistener(wrapperEl);
                  }
               }
            }
         }
      }

      setSVGEventlistener(svg) {
         svg.addEventListener('click', () => {
            const newCategory = new Category();
            newCategory.addNewCategory();
         })
      }
   }
}