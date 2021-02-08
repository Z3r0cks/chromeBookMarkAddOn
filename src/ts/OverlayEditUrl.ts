/// <reference path="./svgs/closeSvg.ts" />

namespace BookmarkExtension {
   export class OverlayEditUrl {
      titleText: HTMLParagraphElement;
      title: HTMLInputElement;
      urlText: HTMLParagraphElement;
      url: HTMLInputElement;
      wrapper: HTMLDivElement;
      closeBtn: CloseSvg;
      acceptBtn: AcceptSvg;

      constructor(svg) {
         let innerHtml = svg.parentElement.firstChild.nextElementSibling.innerHTML
         let href = svg.parentElement.firstChild.nextElementSibling.href
         this.wrapper = document.createElement("div");
         this.title = document.createElement("input");
         this.titleText = document.createElement("p");
         this.urlText = document.createElement("p");
         this.url = document.createElement("input");
         this.closeBtn = new CloseSvg("closeBtn", "#74dfd9");
         this.acceptBtn = new AcceptSvg("acceptBtn", "#74dfd9");

         this.titleText.innerHTML = "Add new title";
         this.titleText.className = "overlayDesc";
         this.urlText.innerHTML = "Add new URL";
         this.urlText.className = "overlayDesc";
         this.title.className = "overlayInput"
         this.url.className = "overlayInput"
         this.wrapper.className = "overlayWrapper";
         this.title.value = innerHtml;
         this.url.value = href;
         this.acceptBtn.svg.addEventListener("click", () => { this.acceptBtnHandler(svg, this.title.value, this.url.value) })
         this.closeBtn.svg.addEventListener("click", () => { this.closeHandler() })

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
         console.log(innerHTML);
         console.log(href);
         svg.parentElement.firstChild.nextElementSibling.innerHTML = innerHTML;
         svg.parentElement.firstChild.nextElementSibling.href = href;
         this.closeHandler();
      }
   }
}