/// <reference path="./Category.ts" />
/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./Storage.ts" />
namespace BookmarkExtension {
   //TODO: Auslagern der Storage, da chrome.sync begrenzt -> parseStorge() > Storage

   // Storage.replaceBodyInnerHtml();
   function createDevButtons() {
      const getSyncStorage: HTMLButtonElement = document.createElement("button");
      const deleteSycnStorage: HTMLButtonElement = document.createElement("button");
      const saveBodyInnerHtml: HTMLButtonElement = document.createElement("button");
      const replaceBodyInnerHtml: HTMLButtonElement = document.createElement("button");
      const parseStorage: HTMLButtonElement = document.createElement("button");

      deleteSycnStorage.innerHTML = "Delete Sync Dev Storage";
      getSyncStorage.innerHTML = "Get Sync Dev Storage";
      saveBodyInnerHtml.innerHTML = "Save Body InnerHTML";
      replaceBodyInnerHtml.innerHTML = "Replace Body InnerHtml";
      parseStorage.innerHTML = "Parse Storage";

      replaceBodyInnerHtml.addEventListener("click", () => {
         Storage.replaceSaveFile();
      })

      saveBodyInnerHtml.addEventListener("click", () => {
         Storage.createSaveFile();
         // Storage.parseStorage();
      })

      deleteSycnStorage.addEventListener("click", () => {
         Storage.deleteSycnStorage();
      })

      getSyncStorage.addEventListener("click", () => {
         Storage.getSyncStorage();
      })

      parseStorage.addEventListener("click", () => {
         Storage.parseStorage();
      })

      document.body.appendChild(deleteSycnStorage);
      document.body.appendChild(getSyncStorage);
      document.body.appendChild(replaceBodyInnerHtml);
      document.body.appendChild(saveBodyInnerHtml);
      document.body.appendChild(parseStorage);
   }
   createDevButtons();

   export const CategoryList: Category[] = [];
   const newAddBtn = document.createElement("button");
   newAddBtn.className = "addNewCategory"
   newAddBtn.innerHTML = "Add Category"

   const wrapper: HTMLElement = document.getElementById("wrapper");
   document.body.appendChild(newAddBtn);
   newAddBtn.addEventListener('click', () => {
      const newCategory: Category = new Category();
      CategoryList.push(newCategory);
      newCategory.addNewCategory();
      console.log(CategoryList);
   })

}
