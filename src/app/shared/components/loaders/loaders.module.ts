import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoaderComponent } from './main-loader/main-loader.component';
import { ImgSafeModule } from '../img-safe/img-safe.module';

@NgModule({
  declarations: [MainLoaderComponent],
  imports: [CommonModule, ImgSafeModule],
  exports: [MainLoaderComponent]
})
export class LoadersModule {}
