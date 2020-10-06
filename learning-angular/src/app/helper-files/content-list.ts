import {Content} from "./content-interface";
import {Component} from "@angular/core";
//
// @NgModule({
//
//   imports: [],
//   exports: [],
//   declarations: [],
//   providers: [],
// })

export class ContentList {

  private _contentArray: Content[];

  get contentArray(): Content[] {
    return this._contentArray;
  }

  get contentSize() {
    return this.contentArray.length
  }

  constructor() {
    this._contentArray = [];
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

}

class ContentListImpl extends ContentList {
}
