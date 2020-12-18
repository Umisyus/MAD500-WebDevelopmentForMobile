import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataProviderService} from '../Services/data-provider.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item;
  id;

  constructor(private route: ActivatedRoute, private dps: DataProviderService) {
    console.log(`ID is: ${this.id}`);

    this.route.paramMap.subscribe(param => this.id = param.get('id'));
    // Get the movie
    this.dps.getItem(this.id).subscribe(value => this.item = value);

  }

  ngOnInit(): void {

  }

}
