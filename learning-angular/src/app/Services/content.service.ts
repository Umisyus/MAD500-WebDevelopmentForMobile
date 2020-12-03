import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {contents} from "../helper-files/contentDB";
import {Content} from "../helper-files/content-interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  url = 'api/movie';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Content[]> {
    return this.http.get<Content[]>(this.url);
  }

  addMovie(movie: Content): Observable<Content> {
    return this.http.post<Content>(this.url, movie, this.httpOptions);
  }

  getMoviesObs(): Observable<Content[]> { // asynchronous
    /*Write a message on retrieval*/
    // this.messageService.add("Retrieved content!");
    // Observable of contents (movies)
    return of(contents);
  }
}
