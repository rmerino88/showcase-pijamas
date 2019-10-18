import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotFoundViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {}
