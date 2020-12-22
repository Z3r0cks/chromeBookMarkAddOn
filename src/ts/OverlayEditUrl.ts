/// <reference path="./svgs/closeSvg.ts" />

namespace BookmarkExtension {

   export class OverlayEditUrl {
      title: HTMLInputElement;
      url: HTMLInputElement;
      wrapper: HTMLDivElement;
      closeBtn: CloseSvg;

      constructor(url: string, title: string) {
         this.wrapper = document.createElement("div");
         this.title = document.createElement("input");
         this.url = document.createElement("input");
         this.closeBtn = new CloseSvg("closeBtn", "#74dfd9");

         this.wrapper.className = "overlayWrapper";
         this.title.placeholder = title;
         this.url.placeholder = url;

         this.wrapper.appendChild(this.title);
         this.wrapper.appendChild(this.url);
         this.wrapper.appendChild(this.closeBtn.svg);
         document.body.appendChild(this.wrapper);
      }
   }
}