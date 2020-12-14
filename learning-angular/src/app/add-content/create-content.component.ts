import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ContentService} from "../Services/content.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Content} from "../helper-files/content-interface";
import {contents} from "../helper-files/contentDB";

@Component({
  selector: "app-add-content",
  templateUrl: "./add-content-dialog-button.html",
  styleUrls: ["./add-content.component.css",
    "./dialog-styles.css"],
})

export class AddContentComponent implements OnInit {

  @Output() newMovieEvent = new EventEmitter<any>();

  @Output() updateMovieEvent = new EventEmitter<string>();

  newMovie: any;

  constructor(
    private contentService: ContentService,
    public dialog: MatDialog
  ) {
    this.newMovie = {
      title: "",
      body: "",
      // imgUrl: "",
      author: "",
      // id: null,
      // tags: ["Action", "Adventure"],
      // type: "actionMovie"
    };
  }

  ngOnInit(): void {
    // this.newGameEvent.emit(this.newGame);
  }

  openMovieDialog(): void {
    const gameDialogRef = this.dialog.open(AddContentDialog, {
      width: '400px'
    });
    gameDialogRef.afterClosed().subscribe(newGameFromDialog => {
      this.newMovie = newGameFromDialog;
      if (this.newMovie) {
        this.addGame();
      }
    });
  }

  addGame(): void {
    let contentFromServer: Content;
    console.log("Trying to add the game to the list", this.newMovie);
    this.contentService.addMovie(this.newMovie).subscribe(newMovie => {
      console.log("Added the game to the list", newMovie);
      // this.contentService.getGames().subscribe(games => console.log(games));
      contentFromServer = newMovie;
      this.newMovieEvent.emit(contentFromServer);

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
      body: "",
      // imgUrl: "",
      author: "",
      // id: null,
      // tags: ["Action", "Adventure"],
      // type: "actionMovie"
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
