import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { contents } from '../helper-files/contentDB';
import {Content} from "../helper-files/content-interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): object {
    return { movie: contents };
  }

  genId(fred: Content[]): number{
    return contents.length > 0 ?
      Math.max(...contents.map(c => c.id)) + 1
      : 2000;
  }
}
