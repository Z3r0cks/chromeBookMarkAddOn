
/// <reference path="./SVG.ts" />

namespace BookmarkExtension {

   export class DeleteSvg extends SVG {
      svg: SVGSVGElement;
      path: SVGPathElement;

      constructor(className: string, fill: string) {
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
}

