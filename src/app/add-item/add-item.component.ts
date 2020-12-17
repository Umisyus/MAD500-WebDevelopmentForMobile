import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DataProviderService} from '../Services/data-provider.service';
import {AddDialogComponent} from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  @Input() item: any;

  constructor(private dialog: MatDialog,
              private dps: DataProviderService) {

    this.item = {
      title: '',
      description: '',
      // dateAdded: new Date(),
      imageURL: ''
    };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent,{height: '500px'});
    dialogRef.afterClosed().subscribe(value => {
      this.item = value;
      console.log(this.item);

      if (this.item) {
        console.log(value);
        this.item = value;
        this.addItem();
      }

    });
  }

  addItem(): void {
    this.dps.addItem(this.item).subscribe(value => {
      return console.log(`Added ${value.title} to list.`);
    });
  }
}
