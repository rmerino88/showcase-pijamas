import { Component, OnInit } from '@angular/core';
import { PokemonSearchService } from 'src/app/shared/services/pokemon-search.service';
import { PokemonListPage } from 'src/app/shared/models/pokemon-list-page';
import { Subject } from 'rxjs';
import { PokemonListItemLink } from 'src/app/shared/models/pokemon-list-item-link';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss']
})
export class HomeOverviewComponent implements OnInit {
  public pokemonList$: Subject<PokemonListItemLink[]>;
  public loaded: boolean;
  public maxPageIndex: number;
  public name = '';

  private currentPageIndex = 0;
  private readonly offset = 20;

  constructor(
    private pokemonSearchService: PokemonSearchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemonList$ = new Subject<PokemonListItemLink[]>();
    this.getPokemonList(this.currentPageIndex);
  }

  public pageBack() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.getPokemonList(this.currentPageIndex);
    }
  }

  public pageNext() {
    if (this.currentPageIndex < this.maxPageIndex) {
      this.currentPageIndex++;
      this.getPokemonList(this.currentPageIndex);
    }
  }

  public onInputEnter($name) {
    console.log(name);
    this.navigateDetails({ name: $name, url: '' });
  }

  public navigateDetails(pokemon: PokemonListItemLink) {
    /* In case you want to send params as PATH params
    this.router.navigate(['/home/search'], {
      queryParams: { name: pokemon.name }
    }); */
    this.router.navigate([`/home/search/${pokemon.name}`]);
  }

  private getPokemonList(page: number) {
    this.loaded = true;
    this.pokemonSearchService
      .getPokemonList(page)
      .subscribe((pokemons: PokemonListPage) => {
        setTimeout(() => {
          this.pokemonList$.next(pokemons.results);
          this.maxPageIndex = this.setMaxPageIndex(pokemons.count);
          this.loaded = false;
        }, 1000);
      });
  }

  private setMaxPageIndex(max: number): number {
    return Math.trunc(max / this.offset) - 1;
  }
}
