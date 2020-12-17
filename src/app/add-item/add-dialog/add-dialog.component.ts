import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ItemModel} from '../../Data_Files/itemModel';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {

  item: any;
  @Output() newItem = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) {

    this.item = {
      title: '',
      description: '',
      // dateAdded: new Date(),
      imageURL: ''
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  triggerItemEvent(): void {
    this.newItem.emit(this.item);
    // console.log(this.item);
  }
}
