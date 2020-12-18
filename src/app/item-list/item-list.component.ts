import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../Data_Files/itemModel';
import {DataProviderService} from '../Services/data-provider.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {

  items: ItemModel[] = [];

  constructor(private dps: DataProviderService) {
    this.getAllItems();
    console.log(`Item count: ${this.items.length}`);
  }

  getAllItems(): void {
    // Filter the table and assign the items
    this.dps.getAllItems().subscribe(value => this.items = value.filter(value1 => value1.id > 0));
  }

  deleteItem(id: number): void {
    // Reload table
    this.dps.deleteItem(id).subscribe(_ => this.getAllItems());
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
