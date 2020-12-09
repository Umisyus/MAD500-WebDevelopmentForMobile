import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p> Sorry, the page you were looking for could not be found...
      <app-content-card [contents]="{}"></app-content-card>
    </p>    `,
  styles: [
      `

      body {
        background: #3f51b5;
      }
    `
  ]
})

export class NotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
