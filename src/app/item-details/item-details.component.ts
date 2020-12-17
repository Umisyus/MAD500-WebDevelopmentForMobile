import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from '../Data_Files/itemModel';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: ItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
