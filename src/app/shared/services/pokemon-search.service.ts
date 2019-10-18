import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { PokemonListPage } from '../models/pokemon-list-page';

@Injectable()
export class PokemonSearchService {
  constructor(private httpClient: HttpClient) {}

  public getPokemonList = (page = 0): Observable<PokemonListPage> =>
    this.httpClient.get<PokemonListPage>(
      environment.pokemonApiBaseUrl + 'pokemon?offset=' + page + '&limit=20'
    );

  public getPokemonByName = (name): Observable<any> =>
    this.httpClient.get<PokemonListPage>(
      environment.pokemonApiBaseUrl + 'pokemon/' + name
    );
}
