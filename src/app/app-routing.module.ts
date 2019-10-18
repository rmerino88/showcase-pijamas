import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    /**
     * Use this syntax for non-ivy or Angular 7 and below
     * loadChildren: 'app/public/login/login.module#LoginModule'
     */
    loadChildren: () =>
      import('./public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./private/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuardService]
  },

  {
    path: '**',
    loadChildren: () =>
      import('./shared/components/not-found/not-found.module').then(
        m => m.NotFoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
