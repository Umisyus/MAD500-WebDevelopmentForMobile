import {Component, OnInit} from '@angular/core';
import {ContentList} from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  // templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  template:
      `
      <h2>
          Contents of List
      </h2>

      <ul>
          <li *ngFor="let content of getContent_List.contentArray">
              ID: {{content.id}} <br>
              Author:  {{content.author}} <br>
              Title:     {{content.title}}<br>
              Content Body:  {{content.body}}<br>
              Type:     {{content.type}}<br>
              Image URL:     {{content.imgUrl}}<br>
              Tags:     {{content.tags}}
          </li>
      </ul>
  `
})

export class ContentCardComponent implements OnInit {
  private _getContent_List: ContentList;

  constructor() {
    this._getContent_List = new ContentList();
  }

  get getContent_List(): ContentList {
    return this._getContent_List;
  }

  generateContent() {
    // this._getContent_List.addOne(
    //   {
    //     author: "Ernest Hemingway",
    //     body: "",
    //     id: 1,
    //     imgUrl: "",
    //     title: "The Old Man and the Sea",
    //     type: "Book",
    //     tags: ["Action", "Drama"],
    //   }
    // );

    for (let i = 1; i < 4; i++) {
      this._getContent_List.addOne({
        author: ` Author ${i}`,
        body: `Body: ${i}`,
        id: i,
        imgUrl: "",
        tags: [`Tag:  + ${i}`],
        title: `Title: ${i}`,
        type: `Type: ${i}`
      });
    }
  }

  ngOnInit(): void {
    this.generateContent()
  }


}
