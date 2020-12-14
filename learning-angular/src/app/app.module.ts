import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import {ContentListComponent} from './content-list-component/content-list.component';
import {FormsModule} from "@angular/forms";
import {MoviesFilter} from "./moviesFilter.pipe";
import {HoverStyleDirective} from './hover-style.directive';
import {MessageComponent} from './message/message.component';
import {AddContentComponent, AddContentDialog} from './add-content/create-content.component'
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./Services/InMemoryDataStore";
import {DetailComponent} from './detail/detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from "@angular/router";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    MoviesFilter,
    HoverStyleDirective,
    MessageComponent,
    AddContentComponent,
    AddContentDialog,
    DetailComponent,
    NotFoundComponent
  ],

  imports: [
    // Material UI Components
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,

    // Browser dependencies
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    // Networking, routing data storage modules
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 1000
      }),

    HttpClientInMemoryWebApiModule,
    RouterModule.forRoot([
      {path: 'content/:id', component: DetailComponent},
      {path: 'content', component: ContentListComponent},
      {path: '**', component: NotFoundComponent},
    ]),
    MatRadioModule,

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
