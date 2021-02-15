namespace BookmarkExtension {
   export class Storage {

      static disassembleElements() {
         for (const bodyChildren of document.getElementById("wrapper").children) {
            if (bodyChildren.getAttribute("class") == "catWrapper") {
               for (const catWrapperEl of bodyChildren.children) {
                  if (catWrapperEl.getAttribute("class") == "titleWrapper") {
                     Category.changeIntoPlaceholder((catWrapperEl.firstChild as HTMLInputElement));
                  }
                  if (catWrapperEl.getAttribute("class") == "innerWrapper") {

                     for (const innerWrapperEl of catWrapperEl.children) {
                        //TODO
                        // if (innerWrapperEl.getAttribute("class") == "innerSvg") {
                        //    Storage.setInnerSvgEventlistner(innerWrapperEl);
                        // }
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

      static parseStorage(): saveFile {
         console.log("parseStorage");
         console.log(CategoryList);
         let thisSaveFile = new saveFile;
         for (const iterator of CategoryList) {
            thisSaveFile.createNewSaveFile(iterator.catWrapperColor, iterator.titleColor, iterator.urlArray)
         }
         return thisSaveFile
         // chrome.storage.sync.get(["saveFile"], e => {
         //    console.log(e.saveFile);
         //    // for (const iterator of e.saveFile) {
         //    //    console.log(iterator.catWrapperColor);
         //    //    thisSaveFile.createNewSaveFile(iterator.catWrapperColor, iterator.titleColor, iterator.urlArray);
         //    // }
         //    chrome.storage.sync.set({ saveFile: thisSaveFile })
         //    // console.log(thisSaveFile);
         // });
      }

      static setSVGEventlistener(btn) {
         btn.addEventListener('click', () => {
            const newCategory = new Category();
            newCategory.addNewCategory();
         })
      }

      //TODO
      // static setInnerSvgEventlistner(svg) {
      //    svg.addEventListener("click", () => {
      //       Category.addNewUrl(svg)
      //    })
      // }

      // new Storage(e.saveFile);


      static async replaceSaveFile() {
         chrome.storage.sync.get(["saveFile"], e => {
            console.log(e.saveFile);
            for (const iterator of e.saveFile.wrapperColor) {
               console.log(iterator);
            }
         });

         // await callGoogleSyncFunction();
         // Storage.disassembleElements()

         // function callGoogleSyncFunction() {
         //    return new Promise(resolve => {
         //       console.log("replaceSaveFile");
         //       chrome.storage.sync.get(["saveFile"], e => {
         //          document.getElementById("wrapper").innerHTML = e.saveFile;
         //          resolve(document.getElementById("wrapper"));
         //       });
         //    })
         // }
      }

      static createSaveFile() {
         console.log("saveBodyInnerHtml");
         // chrome.storage.sync.set({ saveFile: document.getElementById("wrapper").innerHTML });
         // console.log(CategoryList);
         const thisSaveFile = Storage.parseStorage();
         // console.log(thisSaveFile);
         chrome.storage.sync.set({ saveFile: thisSaveFile });
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
         chrome.storage.sync.get(["saveFile"], e => {
            console.log(e);
         });
      }
   }
}