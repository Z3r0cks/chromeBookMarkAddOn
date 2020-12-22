/// <reference path="./SVG.ts" />

namespace BookmarkExtension {

   export class AcceptSvg extends SVG {
      svg: SVGSVGElement;
      path: SVGPathElement;

      constructor(className: string, fill: string) {
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
}