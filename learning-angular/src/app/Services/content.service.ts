import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Content} from "../helper-files/content-interface";
import {contents} from "../helper-files/contentDB";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {
  }

  getGames(): Content[] { // synchronous
    return contents;
  }

  getGamesObs(): Observable<Content[]> { // asynchronous
    return of(contents);
  }
}
