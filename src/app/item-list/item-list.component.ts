import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../Data_Files/itemModel';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: ItemModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
