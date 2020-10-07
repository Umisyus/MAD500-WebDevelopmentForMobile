import {Component} from '@angular/core';
import {ContentList} from "../helper-files/Content_List";

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
          <li *ngFor="let content of _getContent_List.contentArray">
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

export class ContentCardComponent {
  public _getContent_List: ContentList = new ContentList();

}
