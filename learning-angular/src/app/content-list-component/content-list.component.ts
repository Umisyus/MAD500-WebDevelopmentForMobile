import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../Services/content.service";
import {UpdateService} from "../Services/update.service";

@Component({
  selector: 'app-content-list-component',
  templateUrl: './content-list.component.html',
  styleUrls: ['../content-list-component/content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  contents: Content[] = [];

  types = {action: "actionMovie", adventure: "adventureMovie"};

  constructor(private contentService: ContentService, private updateSrvc: UpdateService) {

  }

  @Input('query')

  query: String;

  onSearch(query: String) {

    /*Search array with find*/
    let found = this.contents.find(value => {
      return value.title.toLowerCase() === query.toString().toLowerCase();
    });

    /*Print that it is found*/
    if (found) {
      alert(`FOUND ${found.title}! :D`)
    } else {
      /*Print that it is not found*/
      alert(`${query} not found... :(`)
    }
  }

  ngOnInit(): void {
    // this.contents = [];
    this.getMovies();
  }

  getMovies() {

    this.contentService.getMoviesObs().subscribe(value => {

      this.contents = value;

      // Show update
    });
  }

  addToList(newMovie: Content): void {
    this.contents.push(newMovie);
    this.contents = Object.assign([], this.contents);
    this.updateSrvc.onApplied();
  }

  newMovieEvent($event) {
    this.updateSrvc.onUpdate();
    this.addToList($event);

  }
}

