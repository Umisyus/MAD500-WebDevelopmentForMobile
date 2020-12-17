import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ItemModel} from '../../Data_Files/itemModel';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {
  item: any;
  // @Output() newItem = new EventEmitter<ItemModel>();

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) {

    this.item = {
      title: '',
      description: '',
      dateAdded: new Date().toDateString(),
      imageURL: ''
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
