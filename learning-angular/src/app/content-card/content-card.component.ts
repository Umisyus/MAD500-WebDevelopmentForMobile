import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  // template:''
})

export class ContentCardComponent implements OnInit {

  @Input() contents: Content;
  imgClicked = () => {
    console.log("image of " + this.contents.title + " was clicked!")
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
