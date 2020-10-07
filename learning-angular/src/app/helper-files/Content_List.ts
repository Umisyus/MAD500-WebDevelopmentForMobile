import {Content} from "./content-interface";

export class ContentList {
  private _contentArray: Content[];

  get contentArray(): Content[] {
    return this._contentArray;
  }

  get contentSize() {
    return this.contentArray.length
  }

  constructor() {
    // Create empty array for Content
    this._contentArray = [];

    // Create entries for Content array
    this.generateContent()
  }

  addOne(content: Content) {
    this._contentArray.push(content)
  }

  getElementAt(index: number) {
    if (this.contentArray != null && this.contentArray.length > 0)
      return this.contentArray[index];
    else {
      return null
    }
  }

  generateContent() {

    // Create dummy entries for content
    for (let i = 1; i < 4; i++) {
      this.addOne({
        author: ` Author ${i}`,
        body: `Body: ${i}`,
        id: i,
        imgUrl: `http://1.1.1.1/${i}`,
        tags: [`Tag: ${i}`],
        title: `Title: ${i}`,
        type: `Type: ${i}`
      });
    }
  }

}
