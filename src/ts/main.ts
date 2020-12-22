/// <reference path="./Category.ts" />
/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./Storage.ts" />
namespace BookmarkExtension {

   const getSyncStorage: HTMLButtonElement = document.createElement("button");
   const deleteSycnStorage: HTMLButtonElement = document.createElement("button");
   const saveBodyInnerHtml: HTMLButtonElement = document.createElement("button");
   const replaceBodyInnerHtml: HTMLButtonElement = document.createElement("button");


   deleteSycnStorage.innerHTML = "Delete dev Storage";
   getSyncStorage.innerHTML = "Get dev Storage";
   saveBodyInnerHtml.innerHTML = "Save Body InnerHTML";
   replaceBodyInnerHtml.innerHTML = "Replace Body InnerHtml";



   replaceBodyInnerHtml.addEventListener("click", () => {
      chrome.storage.sync.get(["bodyInnerHTML"], e => {
         new Storage(e.bodyInnerHTML);
      });
   })

   saveBodyInnerHtml.addEventListener("click", () => {
      chrome.storage.sync.set({ bodyInnerHTML: document.body.innerHTML });
   })

   deleteSycnStorage.addEventListener("click", () => {
      chrome.storage.sync.get(null, function (items) {
         Object.keys(items).forEach(e => {
            chrome.storage.sync.remove(e);
         });
         Object.keys(items);
      })
   })

   getSyncStorage.addEventListener("click", () => {
      chrome.storage.sync.get(null, function (items) {
         console.log(Object.keys(items));
      })
   })

   const svg = new AddSVG("svg", "#74dfd9").svg
   const wrapper: HTMLElement = document.getElementById("wrapper");
   document.body.appendChild(deleteSycnStorage);
   document.body.appendChild(getSyncStorage);
   document.body.appendChild(saveBodyInnerHtml);
   document.body.appendChild(replaceBodyInnerHtml);

   wrapper.appendChild(svg);

   svg.addEventListener('click', () => {
      const newCategory: Category = new Category();
      newCategory.addNewCategory();
   })
}
