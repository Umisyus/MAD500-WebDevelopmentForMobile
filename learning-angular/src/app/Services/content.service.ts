import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Content} from "../helper-files/content-interface";
import {contents} from "../helper-files/contentDB";

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  contents: Content[] = [];

  constructor() {
  }

  addMovies(mov: Content): void {
    this.contents.push(mov);
  }

  // Not needed
  // getMovies(): Content[] { // synchronous
  //   return contents;
  // }

  clear() {
    this.contents = [];
  }

  getMoviesObs(): Observable<Content[]> { // asynchronous

    /*Write a message on retrieval*/
    
    return of(contents);
  }
}
