import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from '../Data_Files/itemModel';
import {DataProviderService} from '../Services/data-provider.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
  @Input() item;
  items: ItemModel[] = [];

  constructor(private dps: DataProviderService) {
    this.getAllItems();
  }

  getAllItems(): void {
    this.dps.getAllItems().subscribe(value => this.items = value);
  }

  deleteItem(id: number): void {
    this.dps.deleteItem(id).subscribe(value => this.getAllItems());
  }

  ngOnInit(): void {
  }
}
