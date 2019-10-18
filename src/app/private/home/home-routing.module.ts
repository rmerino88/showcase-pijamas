import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeOverviewComponent } from './routes/home-overview/home-overview.component';
import { PokemonSearchEngineComponent } from './routes/pokemon-search-engine/pokemon-search-engine.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: HomeOverviewComponent
      },
      {
        path: 'search',
        component: PokemonSearchEngineComponent
      },
      {
        path: 'search/:id',
        component: PokemonSearchEngineComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
