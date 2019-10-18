export interface ImageSafe {
  name: string;
  alt: string;
  type: TYPE_IMG;
  id?: string | number;
}
export enum TYPE_IMG {
  PNG = 'PNG',
  SVG = 'SVG',
  JPEG = 'JPEG',
  GIF = 'GIF'
}
export enum TYPE_IMG_PATH {
  PNG = '../../../../../assets/png/',
  SVG = '../../../../../assets/svg/',
  JPEG = '../../../../../assets/jpeg/',
  GIF = '../../../../../assets/gif/'
}
export enum TYPE_IMG_TAIL {
  PNG = '.png',
  SVG = '.svg',
  JPEG = '.jpeg',
  GIF = '.gif'
}
