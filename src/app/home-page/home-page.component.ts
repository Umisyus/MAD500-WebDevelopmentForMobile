import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
@Output() ev = new EventEmitter();

  openAddDialog(): void {
    this.ev.emit('opendialog');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
