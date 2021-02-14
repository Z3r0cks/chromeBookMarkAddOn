namespace BookmarkExtension {
   export class Storage {

      static disassembleElements() {
         for (const bodyChildren of document.getElementById("wrapper").children) {

            if (bodyChildren.getAttribute("class") == "catWrapper") {

               for (const catWrapperEl of bodyChildren.children) {
                  if (catWrapperEl.getAttribute("class") == "innerWrapper") {

                     for (const innerWrapperEl of catWrapperEl.children) {
                        if (innerWrapperEl.getAttribute("class") == "innerSvg") {
                           Storage.setInnerSvgEventlistner(innerWrapperEl);
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
      }

      static setSVGEventlistener(btn) {
         btn.addEventListener('click', () => {
            const newCategory = new Category();
            newCategory.addNewCategory();
         })
      }

      static setInnerSvgEventlistner(svg) {
         svg.addEventListener("click", () => {
            Category.addNewUrl(svg)
         })
      }

      // new Storage(e.bodyInnerHTML);


      static async replaceBodyInnerHtml() {
         await callGoogleSyncFunction();
         Storage.disassembleElements()

         function callGoogleSyncFunction() {
            return new Promise(resolve => {
               console.log("replaceBodyInnerHtm");
               chrome.storage.sync.get(["bodyInnerHTML"], e => {
                  document.getElementById("wrapper").innerHTML = e.bodyInnerHTML;
                  resolve(document.getElementById("wrapper"));
               });
            })
         }
      }

      static saveBodyInnerHtml() {
         console.log("saveBodyInnerHtml");
         chrome.storage.sync.set({ bodyInnerHTML: document.getElementById("wrapper").innerHTML });
      }

      static deleteSycnStorage() {
         console.log("deleteSycnStorage");
         chrome.storage.sync.get(null, function (items) {
            Object.keys(items).forEach(e => {
               chrome.storage.sync.remove(e);
            });
            Object.keys(items);
         })
      }

      static getSyncStorage() {
         console.log("getSyncStorage");
         chrome.storage.sync.get(null, function (items) {
            console.log(Object.keys(items));
         })
      }
   }
}