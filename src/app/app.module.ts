import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ItemListComponent} from './item-list/item-list.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCommonModule, MatRippleModule} from '@angular/material/core';
import {ItemNotFoundComponent} from './item-not-found/item-not-found.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MaterialModule} from './material.module';

const routes: Routes = [
  {path: ':itemID', component: ItemDetailsComponent},
  {path: 'items', component: ItemListComponent},
  {path: '**', component: ItemNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ItemListComponent,
    ItemNotFoundComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    HttpClientInMemoryWebApiModule,
    MatRippleModule
  ],
  exports: [RouterModule, MatCommonModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
