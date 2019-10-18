import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeOverviewComponent } from './routes/home-overview/home-overview.component';
import { PokemonSearchService } from 'src/app/shared/services/pokemon-search.service';
import { LoadersModule } from 'src/app/shared/components/loaders/loaders.module';
import { PokemonSearchEngineComponent } from './routes/pokemon-search-engine/pokemon-search-engine.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HomeOverviewComponent,
    PokemonSearchEngineComponent
  ],
  imports: [CommonModule, HomeRoutingModule, LoadersModule, FormsModule],
  providers: [PokemonSearchService]
})
export class HomeModule {}
