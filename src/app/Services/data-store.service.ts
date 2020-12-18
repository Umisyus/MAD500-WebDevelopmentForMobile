import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ITEMS_LIST} from '../Data_Files/ITEMS_LIST';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService implements InMemoryDbService {

  constructor() {
  }

  createDb(): object {
    // Return an empty ITEMS_LIST.ts
    return {item: ITEMS_LIST};
  }

  IDGen(): number {
    return 0;
  }

}
