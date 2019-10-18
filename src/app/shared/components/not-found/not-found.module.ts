import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { ImgSafeModule } from '../img-safe/img-safe.module';

@NgModule({
  declarations: [NotFoundViewComponent],
  imports: [CommonModule, NotFoundRoutingModule, ImgSafeModule],
  exports: [NotFoundViewComponent]
})
export class NotFoundModule {}
