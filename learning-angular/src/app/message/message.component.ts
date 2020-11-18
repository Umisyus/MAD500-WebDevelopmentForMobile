import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../Services/content.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  content: Content[];

  constructor(public messageService: ContentService) {
  }



  ngOnInit(): void {
  }

}
