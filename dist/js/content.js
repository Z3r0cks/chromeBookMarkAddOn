var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BookmarkExtension;
(function (BookmarkExtension) {
    class Category {
        constructor() {
            this.catWrapper = document.createElement("div");
            this.catWrapperColor = "#11adb8";
            this.titleWrapper = document.createElement("div");
            this.title = document.createElement("input");
            this.innerWrapper = document.createElement("div");
            this.title.className = "title";
            this.title.placeholder = "type title";
            this.titleColor = "#74dfd9";
            this.catWrapper.className = "catWrapper";
            this.innerWrapper.className = "innerWrapper";
            this.titleWrapper.className = "titleWrapper";
            this.innerSVG = new BookmarkExtension.AddSVG("innerSvg", "#213044").svg;
            this.urlArray = [];
            Category.setBGColor(this.catWrapper, this.catWrapperColor);
            Category.setBGColor(this.title, this.titleColor);
        }
        addNewCategory() {
            const wrapperEl = document.getElementById("wrapper");
            if (wrapperEl.children.length <= 3) {
                wrapperEl.appendChild(this.catWrapper);
                this.catWrapper.appendChild(this.titleWrapper);
                this.titleWrapper.appendChild(this.title);
                this.catWrapper.appendChild(this.innerWrapper);
                this.innerWrapper.appendChild(this.innerSVG);
                Category.changeIntoPlaceholder(this.title);
                this.innerSVG.addEventListener("click", () => {
                    Category.addNewUrl(this.innerSVG, this.urlArray);
                });
            }
        }
        static pushIntoURLArray(urlArray, URL) {
            urlArray.push(URL);
        }
        static pushURLinURLArray(urlArray, url) {
            urlArray.push(url);
        }
        static setBGColor(HTMLel, color) {
            HTMLel.setAttribute("style", " background-color:" + color);
        }
        static changeIntoPlaceholder(title) {
            title.addEventListener("blur", () => {
                title.placeholder = title.value;
                title.value = "";
            });
        }
        static addNewUrl(innerSVG, urlArray) {
            const newURL = new BookmarkExtension.URLWrapper(urlArray);
            innerSVG.parentElement.appendChild(newURL.wrapper);
            innerSVG.parentElement.appendChild(innerSVG);
            innerSVG.parentElement.nextElementSibling;
            newURL.addUrlBtnEvenetlistner();
        }
    }
    BookmarkExtension.Category = Category;
})(BookmarkExtension || (BookmarkExtension = {}));
var BookmarkExtension;
(function (BookmarkExtension) {
    class SVG {
        constructor(className, fill) {
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.svg.setAttribute("class", className);
            this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            this.path.setAttribute("fill", fill);
            this.svg.appendChild(this.path);
        }
    }
    BookmarkExtension.SVG = SVG;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./SVG.ts" />
var BookmarkExtension;
/// <reference path="./SVG.ts" />
(function (BookmarkExtension) {
    class CloseSvg extends BookmarkExtension.SVG {
        constructor(className, fill) {
            super(className, fill);
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.svg.setAttribute("class", className);
            this.svg.setAttribute("viewBox", "0 0 512 512");
            this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            this.path.setAttribute("fill", fill);
            this.path.setAttributeNS(null, "d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z");
            this.svg.appendChild(this.path);
        }
    }
    BookmarkExtension.CloseSvg = CloseSvg;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./svgs/closeSvg.ts" />
var BookmarkExtension;
/// <reference path="./svgs/closeSvg.ts" />
(function (BookmarkExtension) {
    class OverlayEditUrl {
        constructor(svg) {
            let innerHtml = svg.parentElement.firstChild.nextElementSibling.innerHTML;
            let href = svg.parentElement.firstChild.nextElementSibling.href;
            this.wrapper = document.createElement("div");
            this.title = document.createElement("input");
            this.titleText = document.createElement("p");
            this.urlText = document.createElement("p");
            this.url = document.createElement("input");
            this.closeBtn = new BookmarkExtension.CloseSvg("closeBtn", "#74dfd9");
            this.acceptBtn = new BookmarkExtension.AcceptSvg("acceptBtn", "#74dfd9");
            this.titleText.innerHTML = "Add new title";
            this.titleText.className = "overlayDesc";
            this.urlText.innerHTML = "Add new URL";
            this.urlText.className = "overlayDesc";
            this.title.className = "overlayInput";
            this.url.className = "overlayInput";
            this.wrapper.className = "overlayWrapper";
            this.title.value = innerHtml;
            this.url.value = href;
            this.acceptBtn.svg.addEventListener("click", () => { this.acceptBtnHandler(svg, this.title.value, this.url.value); });
            this.closeBtn.svg.addEventListener("click", () => { this.closeHandler(); });
            this.wrapper.appendChild(this.titleText);
            this.wrapper.appendChild(this.title);
            this.wrapper.appendChild(this.urlText);
            this.wrapper.appendChild(this.url);
            this.wrapper.appendChild(this.acceptBtn.svg);
            this.wrapper.appendChild(this.closeBtn.svg);
            document.body.appendChild(this.wrapper);
        }
        closeHandler() {
            this.wrapper.remove();
        }
        acceptBtnHandler(svg, innerHTML, href) {
            svg.parentElement.firstChild.nextElementSibling.innerHTML = innerHTML;
            svg.parentElement.firstChild.nextElementSibling.href = href;
            this.closeHandler();
        }
    }
    BookmarkExtension.OverlayEditUrl = OverlayEditUrl;
})(BookmarkExtension || (BookmarkExtension = {}));
var BookmarkExtension;
(function (BookmarkExtension) {
    class Storage {
        static disassembleElements() {
            for (const bodyChildren of document.getElementById("wrapper").children) {
                if (bodyChildren.getAttribute("class") == "catWrapper") {
                    for (const catWrapperEl of bodyChildren.children) {
                        if (catWrapperEl.getAttribute("class") == "titleWrapper") {
                            BookmarkExtension.Category.changeIntoPlaceholder(catWrapperEl.firstChild);
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
                                            BookmarkExtension.EditSvg.addClickHandler(urlWrapperEl);
                                        }
                                        if (urlWrapperEl.getAttribute("class") == "deleteBtn") {
                                            urlWrapperEl.addEventListener("click", () => {
                                                urlWrapperEl.parentElement.remove();
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        static parseStorage() {
            console.log("parseStorage");
            console.log(BookmarkExtension.CategoryList);
            let thisSaveFile = new BookmarkExtension.saveFile;
            for (const iterator of BookmarkExtension.CategoryList) {
                thisSaveFile.createNewSaveFile(iterator.catWrapperColor, iterator.titleColor, iterator.urlArray);
            }
            return thisSaveFile;
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
                const newCategory = new BookmarkExtension.Category();
                newCategory.addNewCategory();
            });
        }
        //TODO
        // static setInnerSvgEventlistner(svg) {
        //    svg.addEventListener("click", () => {
        //       Category.addNewUrl(svg)
        //    })
        // }
        // new Storage(e.saveFile);
        static replaceSaveFile() {
            return __awaiter(this, void 0, void 0, function* () {
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
            });
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
            });
        }
        static getSyncStorage() {
            console.log("getSyncStorage");
            chrome.storage.sync.get(["saveFile"], e => {
                console.log(e);
            });
        }
    }
    BookmarkExtension.Storage = Storage;
})(BookmarkExtension || (BookmarkExtension = {}));
var BookmarkExtension;
(function (BookmarkExtension) {
    class URL {
        constructor(title, url) {
            this.title = title;
            this.url = url;
        }
    }
    BookmarkExtension.URL = URL;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./SVG.ts" />
var BookmarkExtension;
/// <reference path="./SVG.ts" />
(function (BookmarkExtension) {
    class AddSVG extends BookmarkExtension.SVG {
        constructor(className, fill) {
            super(className, fill);
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.svg.setAttribute("class", className);
            this.svg.setAttribute("viewBox", "0 0 512 512");
            this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            this.path.setAttribute("fill", fill);
            this.path.setAttributeNS(null, "d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z");
            this.svg.appendChild(this.path);
        }
    }
    BookmarkExtension.AddSVG = AddSVG;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./SVG.ts" />
var BookmarkExtension;
/// <reference path="./SVG.ts" />
(function (BookmarkExtension) {
    class DeleteSvg extends BookmarkExtension.SVG {
        constructor(className, fill) {
            super(className, fill);
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.svg.setAttribute("class", className);
            this.svg.setAttribute("viewBox", "0 0 448 512");
            this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            this.path.setAttribute("fill", fill);
            this.path.setAttributeNS(null, "d", "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z");
            this.svg.appendChild(this.path);
        }
    }
    BookmarkExtension.DeleteSvg = DeleteSvg;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="../OverlayEditUrl.ts" />
var BookmarkExtension;
/// <reference path="../OverlayEditUrl.ts" />
(function (BookmarkExtension) {
    class EditSvg extends BookmarkExtension.SVG {
        constructor(className, fill) {
            super(className, fill);
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.svg.setAttribute("class", className);
            this.svg.setAttribute("viewBox", "0 0 576 512");
            this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            this.path.setAttribute("fill", fill);
            this.path.setAttributeNS(null, "d", "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z");
            this.svg.appendChild(this.path);
            EditSvg.addClickHandler(this.svg);
        }
        static addClickHandler(svg) {
            svg.addEventListener("click", () => {
                new BookmarkExtension.OverlayEditUrl(svg);
            });
        }
    }
    BookmarkExtension.EditSvg = EditSvg;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./SVG.ts" />
var BookmarkExtension;
/// <reference path="./SVG.ts" />
(function (BookmarkExtension) {
    class AcceptSvg extends BookmarkExtension.SVG {
        constructor(className, fill) {
            super(className, fill);
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.svg.setAttribute("class", className);
            this.svg.setAttribute("viewBox", "0 0 512 512");
            this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            this.path.setAttribute("fill", fill);
            this.path.setAttributeNS(null, "d", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z");
            this.svg.appendChild(this.path);
        }
    }
    BookmarkExtension.AcceptSvg = AcceptSvg;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./svgs/deletSvg.ts" />
/// <reference path="./svgs/editSvg.ts" />
/// <reference path="./svgs/acceptSvg.ts" />
var BookmarkExtension;
/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./svgs/deletSvg.ts" />
/// <reference path="./svgs/editSvg.ts" />
/// <reference path="./svgs/acceptSvg.ts" />
(function (BookmarkExtension) {
    class URLWrapper {
        constructor(URLArray) {
            this.URLArray = URLArray;
            this.wrapper = document.createElement("div");
            this.btnWrapper = document.createElement("div");
            this.btnWrapper.className = "display-flex justify-c-sb flex-d-row";
            this.url = document.createElement("input");
            this.title = document.createElement("input");
            this.Acceptbtn = new BookmarkExtension.AcceptSvg("acceptBtn", "#74dfd9");
            this.deleteBtn = new BookmarkExtension.DeleteSvg("deleteBtn", "#74dfd9");
            this.editBtn = new BookmarkExtension.EditSvg("editBtn", "#74dfd9");
            this.url.className = "url";
            this.url.placeholder = "https://www...";
            this.title.className = "urlTitle";
            this.title.placeholder = "URL title";
            this.wrapper.className = "urlWrapper";
            this.deleteBtn.svg.addEventListener("click", () => {
                this.wrapper.remove();
            });
            this.wrapper.appendChild(this.title);
            this.wrapper.appendChild(this.url);
            this.wrapper.appendChild(this.btnWrapper);
            this.btnWrapper.appendChild(this.Acceptbtn.svg);
            this.btnWrapper.appendChild(this.deleteBtn.svg);
        }
        addUrlBtnEvenetlistner() {
            this.Acceptbtn.svg.addEventListener("click", () => {
                const newUrl = document.createElement("a");
                newUrl.innerHTML = this.title.value;
                newUrl.href = this.url.value;
                newUrl.className = "newUrl";
                newUrl.target = "_blank";
                newUrl.rel = "noopener";
                if (newUrl.href && newUrl.innerHTML) {
                    this.wrapper.className = "urlWrapper display-flex flex-d-row justify-c-sb";
                    this.deleteBtn.svg.remove();
                    this.url.remove();
                    this.title.remove();
                    this.Acceptbtn.svg.remove();
                    this.wrapper.appendChild(newUrl);
                    this.wrapper.appendChild(this.editBtn.svg);
                    this.wrapper.appendChild(this.deleteBtn.svg);
                    BookmarkExtension.Category.pushIntoURLArray(this.URLArray, new BookmarkExtension.URL(this.title.value, this.url.value));
                }
            });
        }
    }
    BookmarkExtension.URLWrapper = URLWrapper;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./Category.ts" />
/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./Storage.ts" />
var BookmarkExtension;
/// <reference path="./Category.ts" />
/// <reference path="./svgs/addSvg.ts" />
/// <reference path="./Storage.ts" />
(function (BookmarkExtension) {
    //TODO: Auslagern der Storage, da chrome.sync begrenzt -> parseStorge() > Storage
    // Storage.replaceBodyInnerHtml();
    function createDevButtons() {
        const getSyncStorage = document.createElement("button");
        const deleteSycnStorage = document.createElement("button");
        const saveBodyInnerHtml = document.createElement("button");
        const replaceBodyInnerHtml = document.createElement("button");
        const parseStorage = document.createElement("button");
        deleteSycnStorage.innerHTML = "Delete Sync Dev Storage";
        getSyncStorage.innerHTML = "Get Sync Dev Storage";
        saveBodyInnerHtml.innerHTML = "Save Body InnerHTML";
        replaceBodyInnerHtml.innerHTML = "Replace Body InnerHtml";
        parseStorage.innerHTML = "Parse Storage";
        replaceBodyInnerHtml.addEventListener("click", () => {
            BookmarkExtension.Storage.replaceSaveFile();
        });
        saveBodyInnerHtml.addEventListener("click", () => {
            BookmarkExtension.Storage.createSaveFile();
            // Storage.parseStorage();
        });
        deleteSycnStorage.addEventListener("click", () => {
            BookmarkExtension.Storage.deleteSycnStorage();
        });
        getSyncStorage.addEventListener("click", () => {
            BookmarkExtension.Storage.getSyncStorage();
        });
        parseStorage.addEventListener("click", () => {
            BookmarkExtension.Storage.parseStorage();
        });
        document.body.appendChild(deleteSycnStorage);
        document.body.appendChild(getSyncStorage);
        document.body.appendChild(replaceBodyInnerHtml);
        document.body.appendChild(saveBodyInnerHtml);
        document.body.appendChild(parseStorage);
    }
    createDevButtons();
    BookmarkExtension.CategoryList = [];
    const newAddBtn = document.createElement("button");
    newAddBtn.className = "addNewCategory";
    newAddBtn.innerHTML = "Add Category";
    const wrapper = document.getElementById("wrapper");
    document.body.appendChild(newAddBtn);
    newAddBtn.addEventListener('click', () => {
        const newCategory = new BookmarkExtension.Category();
        BookmarkExtension.CategoryList.push(newCategory);
        newCategory.addNewCategory();
        console.log(BookmarkExtension.CategoryList);
    });
})(BookmarkExtension || (BookmarkExtension = {}));
var BookmarkExtension;
(function (BookmarkExtension) {
    class saveFile {
        constructor() {
            this.wrapperColor = [];
            this.titleColor = [];
            this.URL = [];
            this.wrapperColor = [];
            this.titleColor = [];
            this.URL = [];
        }
        createNewSaveFile(wrapperColor, titleColor, URL) {
            this.wrapperColor.push(wrapperColor);
            this.titleColor.push(titleColor);
            this.URL.push(URL);
        }
    }
    BookmarkExtension.saveFile = saveFile;
})(BookmarkExtension || (BookmarkExtension = {}));
//# sourceMappingURL=content.js.map