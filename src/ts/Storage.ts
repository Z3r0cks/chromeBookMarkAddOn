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
            console.log(bodyChildren);
            if (bodyChildren.getAttribute("class") == "addNewCategory") {
               this.setSVGEventlistener(bodyChildren);
            }

            if (bodyChildren.getAttribute("id") == "wrapper") {

               for (const wrapperEl of bodyChildren.children) {
                  if (wrapperEl.getAttribute("class") == "catWrapper") {

                     for (const catWrapperEl of wrapperEl.children) {
                        if (catWrapperEl.getAttribute("class") == "innerWrapper") {

                           for (const innerWrapperEl of catWrapperEl.children) {
                              if (innerWrapperEl.getAttribute("class") == "innerSvg") {
                                 this.setInnerSvgEventlistner(innerWrapperEl);
                              }
                              if (innerWrapperEl.getAttribute("class") == "urlWrapper display-flex flex-d-row justify-c-sb") {

                                 for (const urlWrapperEl of innerWrapperEl.children) {
                                    if (urlWrapperEl.getAttribute("class") == "editBtn") {
                                       EditSvg.addClickHandler(urlWrapperEl);
                                    }
                                    if (urlWrapperEl.getAttribute("class") == "deleteBtn") {
                                       urlWrapperEl.addEventListener("click", () => {
                                          urlWrapperEl.parentElement.remove()
                                       })
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            };
         }
      }

      setSVGEventlistener(btn) {
         btn.addEventListener('click', () => {
            const newCategory = new Category();
            newCategory.addNewCategory();
         })
      }

      setInnerSvgEventlistner(svg) {
         svg.addEventListener("click", () => {
            Category.addNewUrl(svg)
         })
      }

      static replaceBodyInnerHtml() {
         chrome.storage.sync.get(["bodyInnerHTML"], e => {
            new Storage(e.bodyInnerHTML);
         });
      }

      static saveBodyInnerHtml() {
         chrome.storage.sync.set({ bodyInnerHTML: document.body.innerHTML });
      }

      static deleteSycnStorage() {
         chrome.storage.sync.get(null, function (items) {
            Object.keys(items).forEach(e => {
               chrome.storage.sync.remove(e);
            });
            Object.keys(items);
         })
      }

      static getSyncStorage() {
         chrome.storage.sync.get(null, function (items) {
            console.log(Object.keys(items));
         })
      }
   }
}