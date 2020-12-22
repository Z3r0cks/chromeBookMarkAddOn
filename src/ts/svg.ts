
namespace BookmarkExtension {

   export class SVG {
      svg: SVGSVGElement;
      path: SVGPathElement;

      constructor(className: string, fill: string) {
         this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
         this.svg.setAttribute("class", className);
         this.svg.setAttribute("viewBox", "0 0 512 512");

         this.path = document.createElementNS('http://www.w3.org/2000/svg',"path");
         this.path.setAttribute("fill", fill);
         this.path.setAttributeNS(null, "d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z");
         this.svg.appendChild(this.path);
      }
   }
}

