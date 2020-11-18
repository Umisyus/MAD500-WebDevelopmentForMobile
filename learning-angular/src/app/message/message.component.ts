import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../Services/content.service";
import {MessageService} from "../Services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messages: string[];

  constructor(public messageService: MessageService) {
  }


  ngOnInit(): void {
  }

}
