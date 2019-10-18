import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderInfoModule } from './shared/components/header-info/header-info.module';
import { LoadersModule } from './shared/components/loaders/loaders.module';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderInfoModule,
    LoadersModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
