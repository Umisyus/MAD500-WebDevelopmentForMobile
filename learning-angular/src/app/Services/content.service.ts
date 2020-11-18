import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {contents} from "../helper-files/contentDB";
import {Content} from "../helper-files/content-interface";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  contents: Content[] = [];
  messages: string[] = [];

  constructor(private messageService: MessageService) {
  }

  // addMovies(mov: Content): void {
  //   this.contents.push(mov);
  // }
  //
  // clearMovies() {
  //   this.contents = [];
  //

  getMoviesObs(): Observable<Content[]> { // asynchronous
    /*Write a message on retrieval*/
    this.messageService.add("Retrieved content!");
    // Observable of contents (movies)
    return of(contents);
  }
}
