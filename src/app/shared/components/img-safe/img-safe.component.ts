import { Component, Input } from '@angular/core';
import { ImageSafe, TYPE_IMG, TYPE_IMG_PATH, TYPE_IMG_TAIL } from './img-safe';

@Component({
  selector: 'sp-img-safe',
  templateUrl: './img-safe.component.html',
  styleUrls: ['./img-safe.component.scss']
})
export class ImgSafeComponent {
  @Input() imageSafe: ImageSafe;

  private readonly imgBackup: ImageSafe = {
    name: 'information',
    type: TYPE_IMG.PNG,
    alt: ''
  };

  public setBackupImg() {
    this.imageSafe = this.imgBackup;
  }

  public composeImageSrc(imageSafe: ImageSafe): string {
    return (
      TYPE_IMG_PATH[imageSafe.type] +
      imageSafe.name +
      TYPE_IMG_TAIL[imageSafe.type]
    );
  }
}
