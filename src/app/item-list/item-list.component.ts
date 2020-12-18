import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from '../Data_Files/itemModel';
import {DataProviderService} from '../Services/data-provider.service';
import {Sort} from '@angular/material/sort';

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
    console.log(`Item count: ${this.items.length}`);
  }

  getAllItems(): void {
    this.dps.getAllItems().subscribe(value => {
      console.log(`Item count: ${value.length}`);
      return this.items = value;
    });
  }

  deleteItem(id: number): void {
    this.dps.deleteItem(id).subscribe(value => this.getAllItems());
  }

  ngOnInit(): void {
  }

  sortedData(sort: Sort): ItemModel[] {
    sort.direction = 'asc';
    let sorted;

    if (sort.direction === 'asc') {
      sorted = this.items.sort((a, b) => a.id < b.id ? a.id : b.id);
      // Sort descending
    } else {
      sorted = this.items.sort((a, b) => a.id > b.id ? a.id : b.id);
    }
    // Return results
    return sorted || this.items;
  }
}
