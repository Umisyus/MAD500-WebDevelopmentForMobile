import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ItemListComponent} from './item-list/item-list.component';
import {RouterModule, Routes} from '@angular/router';
import {ItemNotFoundComponent} from './item-not-found/item-not-found.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MaterialModule} from './material.module';
import {DataStoreService} from './Services/data-store.service';
import {AddItemComponent} from './add-item/add-item.component';
import {AddDialogComponent} from './add-item/add-dialog/add-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {path: 'item/:id', component: ItemDetailsComponent},
  {path: 'add', component: AddItemComponent},
  {path: 'items', component: ItemListComponent},
  {path: '', component: HomePageComponent},
  {path: '**', component: ItemNotFoundComponent},

];

@NgModule({
  declarations: [

    AppComponent,
    AddItemComponent,
    AddDialogComponent,
    HomePageComponent,
    ItemListComponent,
    ItemNotFoundComponent,
    ItemDetailsComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(DataStoreService, {dataEncapsulation: false}),
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
  ],

  exports: [RouterModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
