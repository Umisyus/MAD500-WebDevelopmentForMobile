import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../Services/content.service";
import {MessageService} from "../Services/message.service";

@Component({
  selector: 'app-content-list-component',
  templateUrl: './content-list.component.html',
  styleUrls: ['../content-list-component/content-list.component.scss']
})

export class ContentListComponent implements OnInit {

  contents: Content[] = [];

  types = {action: "actionMovie", adventure: "adventureMovie"};

  constructor(private contentService: ContentService) {

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
    this.getMovies();
  }

  getMovies() {
    this.contentService.getMoviesObs().subscribe(value => {

      /*TEMP*/
      // console.log(value);
      this.contents = value;
    })
  }

}
