namespace BookmarkExtension {

   export abstract class SVG {
      svg: SVGSVGElement;
      path: SVGPathElement;

      constructor(className: string, fill: string) {
         this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
         this.svg.setAttribute("class", className);
         this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
         this.path.setAttribute("fill", fill);
         this.svg.appendChild(this.path);
      }
   }
}