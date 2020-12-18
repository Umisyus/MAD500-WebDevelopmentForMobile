import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ItemModel} from '../Data_Files/itemModel';


@Injectable({
  providedIn: 'root'
})

export class DataProviderService {

  constructor(private http: HttpClient) {
  }

  url = 'api/items';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  // Gets all items as an Observable ItemModel[]
  getAllItems = () => this.http.get<ItemModel[]>(this.url);

  // Adds an item the content array
  // tslint:disable-next-line:typedef
  addItem(item: ItemModel) {

    console.log(`Got a new Item: ${item.title}`);
    item.id += 1;
    return this.http.post<ItemModel>(this.url, item, this.httpOptions);
  }

  // Gets an item based on it's ID
  getItem = (id: number): Observable<ItemModel> => this.http.get<ItemModel>(`${this.url}/${id}`);

  // Deletes an item based on ID
  deleteItem = (id: number): Observable<ItemModel> => this.http.delete<ItemModel>(`${this.url}/${id}`);

}
