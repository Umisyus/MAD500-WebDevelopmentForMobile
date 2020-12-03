import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ContentService} from "../Services/content.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: "app-add-content",
  templateUrl: "./add-content-dialog-button.html",
  styleUrls: ["./add-content.component.scss"]
})
export class AddContentComponent implements OnInit {
  @Output() newGameEvent = new EventEmitter<Content>();
  @Output() updateGameEvent = new EventEmitter<string>();

  newGame: any;

  constructor(
    private contentService: ContentService,
    public dialog: MatDialog
  ) {
    this.newGame = {
      title: "",
      imageUrl: ""
    };
  }

  ngOnInit(): void {
    // this.newGameEvent.emit(this.newGame);
  }

  openMovieDialog(): void {
    const gameDialogRef = this.dialog.open(AddContentDialog);

    gameDialogRef.afterClosed().subscribe(newGameFromDialog => {
      this.newGame = newGameFromDialog;
      if (this.newGame) {
        this.addGame();
      }
    });
  }

  addGame(): void {
    let newGameFromServer: Content;
    console.log("Trying to add the game to the list", this.newGame);
    this.contentService.addMovie(this.newGame).subscribe(serverGame => {
      console.log("Added the game to the list", serverGame);
      // this.contentService.getGames().subscribe(games => console.log(games));
      newGameFromServer = serverGame;
      this.newGameEvent.emit(newGameFromServer);
    });

    // console.log('Event Emitted!', this.newGame.title);
  }

}

@Component({
  selector: "app-add-content-dialog",
  templateUrl: "./add-content-dialog.html"
})
export class AddContentDialog {
  movie: any;

  constructor(public dialogRef: MatDialogRef<AddContentDialog>) {
    this.movie = {
      title: "",
      imageUrl: ""
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
