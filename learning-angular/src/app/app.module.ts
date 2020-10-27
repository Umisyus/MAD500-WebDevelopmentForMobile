import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import { ContentListComponent } from './content-list-component/content-list.component';
import {FormsModule} from "@angular/forms";
import {MoviesFilter} from "./moviesFilter.pipe";
import { HoverStyleDirective } from './hover-style.directive'
@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    MoviesFilter,
    HoverStyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  /**
   *
   // ADD MY COMPONENT HERE
   *
   * */
  exports: [],

  /*
  * For some reason, building causes an error about component not being an NgModule and
  *  that annotations are missing from it. Also, contents of list in this example do not appear when this happens
  * */

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
