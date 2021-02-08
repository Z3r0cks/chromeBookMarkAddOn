/// <reference path="./Category.ts" />
/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./Storage.ts" />
namespace BookmarkExtension {

   Storage.replaceBodyInnerHtml();

   const getSyncStorage: HTMLButtonElement = document.createElement("button");
   const deleteSycnStorage: HTMLButtonElement = document.createElement("button");
   const saveBodyInnerHtml: HTMLButtonElement = document.createElement("button");
   const replaceBodyInnerHtml: HTMLButtonElement = document.createElement("button");


   deleteSycnStorage.innerHTML = "Delete Sync Dev Storage";
   getSyncStorage.innerHTML = "Get Sync Dev Storage";
   saveBodyInnerHtml.innerHTML = "Save Body InnerHTML";
   replaceBodyInnerHtml.innerHTML = "Replace Body InnerHtml";

   replaceBodyInnerHtml.addEventListener("click", () => {
      Storage.replaceBodyInnerHtml();
   })

   saveBodyInnerHtml.addEventListener("click", () => {
      Storage.saveBodyInnerHtml();
   })

   deleteSycnStorage.addEventListener("click", () => {
      Storage.deleteSycnStorage();
   })

   getSyncStorage.addEventListener("click", () => {
      Storage.getSyncStorage();
   })


   const newAddBtn = document.createElement("button");
   newAddBtn.className = "addNewCategory"
   newAddBtn.innerHTML = "Add Category"

   const wrapper: HTMLElement = document.getElementById("wrapper");
   document.body.appendChild(deleteSycnStorage);
   document.body.appendChild(getSyncStorage);
   document.body.appendChild(saveBodyInnerHtml);
   document.body.appendChild(replaceBodyInnerHtml);

   document.body.appendChild(newAddBtn);

   newAddBtn.addEventListener('click', () => {
      const newCategory: Category = new Category();
      newCategory.addNewCategory();
   })
}
