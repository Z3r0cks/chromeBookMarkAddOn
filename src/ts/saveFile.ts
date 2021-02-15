namespace BookmarkExtension {
   export class saveFile {
      wrapperColor: string[] = [];
      titleColor: string[] = [];
      URL: URL[][] = [];

      constructor() {
         this.wrapperColor = []
         this.titleColor = []
         this.URL = []
      }

      createNewSaveFile(wrapperColor: string, titleColor: string, URL: URL[]) {
         this.wrapperColor.push(wrapperColor);
         this.titleColor.push(titleColor);
         this.URL.push(URL);
      }
   }
}