import { Component, OnInit } from '@angular/core';
import { ImageSafe, TYPE_IMG } from '../../img-safe/img-safe';

@Component({
  selector: 'sp-not-found-view',
  templateUrl: './not-found-view.component.html',
  styleUrls: ['./not-found-view.component.scss']
})
export class NotFoundViewComponent implements OnInit {
  public img404: ImageSafe;

  constructor() {}

  ngOnInit() {
    this.img404 = {
      name: '404',
      type: TYPE_IMG.JPEG,
      alt: 'Not found'
    };
  }
}
