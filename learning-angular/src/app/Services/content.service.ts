import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {Content} from "../helper-files/content-interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UpdateService} from "./update.service";

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  url = 'api/movie/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient, private updateSrvc: UpdateService) {
  }

  getMoviesObs(): Observable<Content[]> {

    return this.http.get<Content[]>(this.url)
  }

  addMovie(movie: Content): Observable<Content> {
    // console.log(`ContentService: => Added movie: ${movie.title} to Web API!`);
    // Triggers update event

    this.updateSrvc.onUpdate();

    return this.http.post<Content>(this.url, movie, this.httpOptions);

  }

  getMovie(id: number): Observable<Content> { // asynchronous
    /*Write a message on retrieval*/
    // this.messageService.add("Retrieved content!");
    // Observable of contents (movies)
    return this.http.get<Content>("api/movie/" + id);
  }

}
