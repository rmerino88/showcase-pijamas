import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImgSafeComponent } from './img-safe.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImgSafeComponent],
  exports: [ImgSafeComponent]
})
export class ImgSafeModule { }
