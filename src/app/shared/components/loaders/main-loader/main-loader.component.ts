import { Component, OnInit } from '@angular/core';
import { ImageSafe, TYPE_IMG } from '../../img-safe/img-safe';

@Component({
  selector: 'sp-main-loader',
  templateUrl: './main-loader.component.html',
  styleUrls: ['./main-loader.component.scss']
})
export class MainLoaderComponent implements OnInit {
  public imgDuck: ImageSafe;

  constructor() {
    this.imgDuck = {
      name: 'loadduck',
      alt: 'load',
      type: TYPE_IMG.GIF
    };
  }

  ngOnInit() {}
}
