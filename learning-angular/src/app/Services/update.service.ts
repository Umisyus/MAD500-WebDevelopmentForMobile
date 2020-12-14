import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class UpdateService {

  constructor(private _snackBar: MatSnackBar) {

  }

  onUpdate(): void {

    this.showSnackBar(["An update was received!", "DISMISS"]);

  }

  onApplied() {
    this.showSnackBar(["The update has been applied!", ""])
  }


  showSnackBar(str: any[]) {
    this._snackBar.open(str[0], (str[1] || "DISMISS"))
  }

}
