import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginViewComponent } from './login-view.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  declarations: [LoginViewComponent],
  exports: [LoginViewComponent]
})
export class LoginModule {}
