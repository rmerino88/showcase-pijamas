import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImgSafeModule } from '../img-safe/img-safe.module';
import { HeaderButtonGroupComponent } from './header-button-group/header-button-group.component';
import { HeaderInfoViewComponent } from './header-info-view/header-info-view.component';

@NgModule({
  imports: [CommonModule, ImgSafeModule, RouterModule],
  declarations: [HeaderInfoViewComponent, HeaderButtonGroupComponent],
  exports: [HeaderInfoViewComponent]
})
export class HeaderInfoModule {}
