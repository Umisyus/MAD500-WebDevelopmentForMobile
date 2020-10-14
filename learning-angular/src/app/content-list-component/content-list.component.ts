import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list-component',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];

  constructor() {

  }

  ngOnInit(): void {

    for (let i = 0; i < 5; i++) {

      this.contents.push({
        author: "Author " + i,
        body: "" + i,
        id: i,
        imgUrl: "https://picsum.photos/200/300",
        // imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Modern_Warfare_2_Logo.jpg",
        tags: ["" + i, "" + i, "" + i],
        title: "" + i,
        type: "" + i
      })

    }
  }


}
