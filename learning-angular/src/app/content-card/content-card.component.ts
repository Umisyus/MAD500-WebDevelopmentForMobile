import {Component} from '@angular/core';
import {ContentList} from "../helper-files/Content_List";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  // template:''
})

export class ContentCardComponent {
  public _getContent_List: ContentList = new ContentList();

}
