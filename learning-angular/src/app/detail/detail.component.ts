import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../Services/content.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  movie: Content;

  constructor(private route: ActivatedRoute, private content: ContentService) {


  }

  ngOnInit(): void {

    // Get the movie from the server
    this.route.paramMap.subscribe(param => this.id = +param.get('id'));
    // Get the movie
    this.content.getMovie(this.id).subscribe(value => this.movie = value);
  }

}
