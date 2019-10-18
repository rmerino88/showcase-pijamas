import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { PokemonSearchService } from 'src/app/shared/services/pokemon-search.service';

@Component({
  selector: 'sp-pokemon-search-engine',
  templateUrl: './pokemon-search-engine.component.html',
  styleUrls: ['./pokemon-search-engine.component.scss']
})
export class PokemonSearchEngineComponent implements OnInit, OnDestroy {
  public existComponent: boolean;
  public loadedPokemon: any;
  public errorLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonSearchService: PokemonSearchService
  ) {}

  ngOnInit() {
    this.existComponent = true;
    /* In case you want to retrieve PATH params
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.pokemonId = queryParams.get('name');
      this.pokemonUrl = queryParams.get('url');
    });*/
    this.activatedRoute.params
      .pipe(takeWhile(() => this.existComponent))
      .subscribe(params => {
        this.generatePokemonTable(params.id);
      });
  }

  ngOnDestroy(): void {
    this.existComponent = false;
  }

  private generatePokemonTable(name: string) {
    this.errorLoading = false;
    this.pokemonSearchService.getPokemonByName(name).subscribe(
      pokemon => {
        console.log(pokemon);
        this.loadedPokemon = pokemon;
      },
      () => {
        this.loadedPokemon = null;
        this.errorLoading = true;
      }
    );
  }
}
