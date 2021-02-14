namespace BookmarkExtension {
   export class saveFile {
      wrapperColor: string[] = [];
      titleColor: string[] = [];
      URL: URLWrapper[][] = [];

      constructor() {
         this.wrapperColor = []
         this.titleColor = []
         this.URL = []
      }

      createNewSaveFile(wrapperColor: string, titleColor: string, URL: URLWrapper[]) {
         this.wrapperColor.push(wrapperColor);
         this.titleColor.push(titleColor);
         this.URL.push(URL);
      }
   }
}