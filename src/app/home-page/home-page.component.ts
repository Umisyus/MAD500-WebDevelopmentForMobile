import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../Services/data-provider.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(private dps: DataProviderService) {
  }

  items = [];

  genItems(): void {
    for (let i = 0; i < 3; i++) {
      this.items.push(
        {
          id: i,
          title: `Title ${i}`,
          description: `Descripiton ${i}`,
          dateAdded: `Added on: 12/${i}/2020`,
          imageURL: `http://1.1.1.1/${i}.jpg`,
        },
      );
      // Add to array
      this.dps.addItem(this.items[i]).subscribe(value => console.log(`Added: ${value.title}`));
    }
  }

  ngOnInit(): void {
  }

}
